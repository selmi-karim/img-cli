/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:30 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-19 13:05:37
 */
const getImages = require('./img_urls')
const download = require('./download.js')
const styles = require('./styles')
const ora = require('ora');


const uid = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16) + '_' + Math.floor((1 + Math.random()) * 0x10000).toString(16)
}

const getImage = (url, type, directory) => {

  getImages.getImageUrls(url, (err, images) => {
    if (!err) {
      styles.spinner1.succeed()
      styles.green(images.length + ' images found');
      console.log()
      // start the progress bar with a total value of 200 and start value of 0
      if (images.length > 0) {
        styles.bar.start(images.length, 0)
        fetch(directory, type, images)
      }
    }
    else {
      //styles.red('-------->> ')
    }
  })
}

const fetch = (directory, type, images) => {
  images.forEach((element, index) => {
    const name = uid()
    download.saveImg(directory, name, element.url)
  })
  return 'done'
}

module.exports = { getImage }



