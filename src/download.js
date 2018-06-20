/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:23 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-20 14:42:25
 */
const fs = require('fs')
const mkdirp = require('mkdirp')
var getDirName = require('path').dirname
const imageType = require('image-type')
const stream = require('./stream.js')
const styles = require('./styles')


const saveImg = (directory, name, imgURL) => {
    stream.imageBuffer(imgURL).then(buffer => {
        const type = imageType(buffer)
        const path = directory + '/' + name + '.' + type.ext
        mkdirp(getDirName(path), function (err) {
            if (err) {
                styles.red(err)
                return err
            }
            fs.writeFile(path, buffer, (err) => {
                if (err) {
                    styles.red(err)
                    return err
                }
                styles.bar.increment(1)
            })
        })
    })
    return true
}


const solo = (directory, name, imgURL) => {
    stream.imageBuffer(imgURL).then(buffer => {
        const type = imageType(buffer)
        if(buffer===null) {
            styles.spinner2.fail()
            styles.error('no image found')
            return null
        }
        const path = directory + '/' + name + '.' + type.ext
        mkdirp(getDirName(path), function (err) {
            if (err) {
                styles.red(err)
                return err
            }
            fs.writeFile(path, buffer, (err) => {
                if (err) {
                    styles.red(err)
                    return err
                }
                styles.spinner2.succeed()
                styles.warning('Done')
                process.exit(1)       
            })
        })
    })
    return true
}
module.exports = { saveImg,solo }
