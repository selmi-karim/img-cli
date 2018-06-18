#!/usr/bin/env node

'use strict';

const program = require('commander');
const crawler = require('./crawler.js');
const isURL = (url) => {
    const pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    return pattern.test(url)
}

program
    .version('1.0.0', '-v, --version')
    .description('Images Downloader');

program
    .command('img <url>')
    .description('download all images from url with optional directory name and specific image type')
    .option('-d, --directory [directory]', 'choose a specific directory name')
    .option("-t, --type [type]", "Which image type")
    .action((url, options) => {
        const type = options.type || "all"
        const directory = options.directory || "images/"
        if (!isURL(url))
            console.log('error')
        else crawler.getImage(url)

    });


program.parse(process.argv);
