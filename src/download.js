const fs = require('fs')
const imageType = require('image-type')
const stream = require('./stream.js')

const url = (directory,name,url) => {
    stream.imageBuffer(url).then(buffer => {
        const type = imageType(buffer)
        fs.writeFile(directory+name+ type.ext, buffer, (err) => { 
            if (err) console.log('error: '+err)
            else {
                console.log('done')
            }
        })
    })
}
module.exports = { url }