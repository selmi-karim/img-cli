/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:23 
 * @Last Modified by:   kerim selmi 
 * @Last Modified time: 2018-06-18 16:54:23 
 */
const fs = require('fs')
const mkdirp = require('mkdirp')
var getDirName = require('path').dirname
const imageType = require('image-type')
const stream = require('./stream.js')
const styles = require('./styles')


const saveImg = (directory, name, imgURL,callback) => {
    stream.imageBuffer(imgURL).then(buffer => {
        const type = imageType(buffer)
        const path = directory + '/' + name + '.' + type.ext
        mkdirp(getDirName(path), function (err) {
            if (err) callback(err)
            fs.writeFile(path, buffer, (err) => {
                if (err) callback(err)
                return callback('done')
            })
        })
    })
}
module.exports = { saveImg }
