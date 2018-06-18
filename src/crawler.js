/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:30 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-18 16:55:32
 */
const getImages = require('./img_urls')
const download = require('./download.js')
const styles = require('./styles')
const ora = require('ora');


const uid = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16) + '_' + Math.floor((1 + Math.random()) * 0x10000).toString(16)
}
const getImage = (url, type, directory) => {
  const spinner = ora('Fetching').start()

  getImages.getImageUrls(url, function (err, images) {
    if (!err) {
      spinner.succeed()
      styles.green(images.length + ' images found');
      styles.bar.start(images.length, 0);
      images.forEach((element, index) => {
        // start the progress bar with a total value of 200 and start value of 0


        const name = uid()
        download.saveImg(directory, name, element.url
          , (response) => {
            styles.bar.increment(1)

            // update the current value in your application..
            //console.log('response: ' + response)
          })
        //if(index==images.length-1) bar.stop()
      })
    }
    else {
      console.log('ERROR', err);
    }
  })
  //console.log('done')

}

module.exports = { getImage }



