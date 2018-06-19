/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:02 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-19 00:08:49
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
    format: (' {bar}') + ' {percentage}%  | {value}/{total} img',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    stopOnComplete: true
});


const spinner1 = ora('Fetching')
const spinner2 = ora('Fetching')


module.exports = { green, red, blue, clear, bar, spinner1, spinner2 }


