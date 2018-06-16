#!/usr/bin/env node

'use strict';

const program = require('commander');
const crawler = require('./crawler.js');

program
    .version('1.0.0', '-v, --version')
    .description('Images Downloader');

program
    .command('img <url> [directory] [type]')
    .description('download all images from url with optional directory name and specific image type')
    .action((url, directory,type) => {
        console.log('url: ' + url)
        console.log('directory: ' + directory)
        console.log('type: ' + type)
        console.log('crawler: ' + crawler.getImage())
        
       
    });

program.parse(process.argv);
