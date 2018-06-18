/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:02 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-18 16:57:04
 */
const chalk = require('chalk')
const figlet = require('figlet')
const _cliProgress = require('cli-progress');

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

const bar = new _cliProgress.Bar({
    format: 'download [{bar}] {percentage}% | {value}/{total} img '
});


module.exports = { green, red, blue, clear , bar }


