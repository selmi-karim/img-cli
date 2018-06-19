/*
 * @Author: kerim selmi 
 * @Date: 2018-06-19 13:01:08 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-19 13:07:18
 */
/*
 * @Author: kerim selmi 
 * @Date: 2018-06-19 13:01:07 
 * @Last Modified by:   kerim selmi 
 * @Last Modified time: 2018-06-19 13:01:07 
 */
/*
 * @Author: kerim selmi 
 * @Date: 2018-06-19 13:01:06 
 * @Last Modified by:   kerim selmi 
 * @Last Modified time: 2018-06-19 13:01:06 
 */
/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:28 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-19 13:00:57
 */
var path = require('path')
var spawn = require('child_process').spawn
var phantomjs = require('phantomjs-prebuilt')
var Promise = require('bluebird')
var styles = require('./styles')
var counter = 0;
const getImageUrls = (url, callback) => {
  var phantomArgs = [
    path.join(__dirname, '/', 'phantomjs-prebuilt.js'),
    url
  ]

  return new Promise(function (resolve, reject) {
    var phantom = spawn(phantomjs.path, phantomArgs)
    var images = null
    var error = null

    phantom.stdout.on('data', function (data) {
      data = data.toString()
      if (data.indexOf('newimg') == 0 ) {
        
        styles.spinner1.text = ++counter +' Images'
        //console.log('data: ' + data)
      } else if (data.indexOf('Error') >= 0) {
        error = data
      } else {
        try {
          images = JSON.parse(data)
        }
        catch (e) {
          error = e
          images = null
        }
      }
    })

    phantom.stderr.on('data', function (data) {
      error = data
    })

    phantom.on('close', function (code) {
      if (!images && !error) {
        error = new Error('no images found')
      }      
      resolve(images)
      if (callback) callback(null, images)
      
    })
  })
}

module.exports = { getImageUrls }
