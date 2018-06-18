#!/usr/bin/env node

'use strict' 

const program = require('commander') 
const crawler = require('./crawler.js') 
const download = require('./download.js')

const isURL = (url) => {
    const pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    return pattern.test(url)
}

program
    .version('1.0.0', '-v, --version')
    .description('Images Downloader') 

program
    .command('all <url>')
    .description('download all images from url with optional directory name and specific image type')
    .option('-d, --directory [directory]', 'choose a specific directory name')
    .option("-t, --type [type]", "Choose a image type (png, jpg, gif..)")
    .action((url, options) => {
        const type = options.type || "all"
        const directory = options.directory || "images"
        if (!isURL(url)) {
            console.log('error')
        }
        else {
            crawler.getImage(url,type,directory)
        }
}) 


program
    .command('solo <url>')
    .description('download spefic image')
    .option('-d, --directory [directory]', 'choose a specific directory name')
    .action((url, options) => {
        const type = options.type || "all"
        const directory = options.directory || "images"
        if (!isURL(url)) {
            console.log('error')
        }
        else {
            //crawler.getImage(url,type,directory)
            download.saveImg(directory, 'solo', url
                , (response) => {
                  //console.log('response: ' + response)
            })
        }
}) 

program.parse(process.argv) 
