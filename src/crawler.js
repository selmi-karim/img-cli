const getImageUrls = require('get-image-urls')
const download = require('./download.js')

const uid = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16) + '_' + Math.floor((1 + Math.random()) * 0x10000).toString(16)
}
const getImage = (url, type, directory) => {
  getImageUrls(url, function (err, images) {
    if (!err) {
      console.log('Images found', images.length);
      images.forEach(function (element) {
        //console.log('url: '+element)
        const name = uid()
        download.saveImg(directory, name, element.url
          , (response) => {
            //console.log('response: ' + response)
          })
      })
    }
    else {
      console.log('ERROR', err);
    }
  })
}

module.exports = { getImage }



