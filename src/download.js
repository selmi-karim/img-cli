const fs = require('fs') 
const imageType = require('image-type') 
const stream = require('./stream.js') 

stream.imageBuffer('https://www.fillmurray.com/g/200/300').then(buffer => {
    const type = imageType(buffer) 
    fs.writeFile('bill-murray.' + type.ext, buffer, (err) => console.log(err ? err : 'done!')) 
}) 