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
        error = new Error('no images found', code)
        reject(error)
      }      
      resolve(images)
      if (callback) callback(null, images)
      
    })
  })
}

module.exports = { getImageUrls }
