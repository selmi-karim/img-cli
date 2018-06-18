#!/usr/bin/env node

'use strict';

const program = require('commander');
const crawler = require('./crawler.js');


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
        console.log('isurl: ' + isURL(url))
    });


program.parse(process.argv);
