/*
 * @Author: kerim selmi 
 * @Date: 2018-06-18 16:54:28 
 * @Last Modified by:   kerim selmi 
 * @Last Modified time: 2018-06-18 16:54:28 
 */
var path = require('path')
var spawn = require('child_process').spawn
var phantomjs = require('phantomjs-prebuilt')
var Promise = require('bluebird')

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
      data = "" + data
      if (data.indexOf('Error') == 0) {
        error = data
      }
      else {
        try {
          images = JSON.parse(data)
        }
        catch (e) {
          console.log('Error', data)
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

      if (error) {
        reject(error)
        if (callback) callback(error, null)
      }
      else {
        resolve(images)
        if (callback) callback(null, images)
      }
    })
  })
}

module.exports = { getImageUrls }
