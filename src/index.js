#!/usr/bin/env node


/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:04 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-19 12:42:35
 */
'use strict'

const program = require('commander')
const crawler = require('./crawler.js')
const download = require('./download.js')
const styles = require('./styles')
const chalk = require('chalk')


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
        styles.clear()
        styles.spinner1.start()
        const type = options.type || "all"
        const directory = options.directory || "images"
        if (!isURL(url)) {
            styles.spinner1.fail()
            console.log()
            styles.error('ERROR: invalid url')
        }
        else {
            crawler.getImage(url, type, directory)
        }
    })


program
    .command('solo <url>')
    .description('download spefic image')
    .option('-d, --directory [directory]', 'choose a specific directory name')
    .action((url, options) => {
        styles.clear()
        console.log('url: '+url)
        styles.spinner2.start()
        const directory = options.directory || "images"
        if (!isURL(url)) {
            styles.spinner2.fail()
            console.log()
            styles.error('ERROR: Invalid URL format')
        }
        else {
            download.solo(directory, 'solo', url)  
        }
    })

program.parse(process.argv) 
