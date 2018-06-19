/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:02 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-19 11:53:30
 */
const chalk = require('chalk')
const figlet = require('figlet')
const _cliProgress = require('cli-progress')
const ora = require('ora');


const log = console.log
const clear = () => {
    process.stdout.write('\033c')
    console.log('')
    console.log('')
    console.log(figlet.textSync('Pingo', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));

}

process.on('exit', function (){
    console.log()
    warning('Done')
    console.log()
    
  });

const blue = (msg) => {
    log(chalk.blue(msg))
}

const red = (msg) => {
    log(chalk.red(msg))
}

const green = (msg) => {
    log(chalk.green(msg))
}

const bar = new _cliProgress.Bar({}, {
    format: ('Download: {bar}') + ' {percentage}%  | {value}/{total} ',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    stopOnComplete: true
});

const err = chalk.bold.red;
const war = chalk.keyword('green');
const error = (msg) => {
    console.log(err(msg));
}
const warning = (msg) => {
    console.log(war(msg));
}

const spinner1 = ora('Image Search')
const spinner2 = ora('Image Search')

spinner1.spinner = {
    interval: 100, // optional
    frames: [
        "◐",
        "◓",
        "◑",
        "◒"
    ]
}
spinner2.spinner = {
    interval: 100, // optional
    frames: [
        "◐",
        "◓",
        "◑",
        "◒"
    ]
}


module.exports = { green, red, blue, clear, bar, spinner1, spinner2, error, warning }


