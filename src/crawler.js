const getImageUrls = require('get-image-urls');

const getImage = (url,type,directory) => {
  getImageUrls(url, function (err, images) {
    if (!err) {
      console.log('Images found', images.length);
      //console.log(images);
       images.forEach(function(element) {
         
        console.log(element);
      })
      
    }
    else {
      console.log('ERROR', err);
    }
  })
}

module.exports = { getImage };



