const getImageUrls = require('get-image-urls');
 
const getImage = () => {
getImageUrls('http://karimation.com', function(err, images) {
  if (!err) {
    console.log('Images found', images.length);
    //console.log(images);
  }
  else {
    console.log('ERROR', err);
  }
})
}

module.exports = {  getImage };



