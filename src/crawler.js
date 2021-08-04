const getImages = require("./img_urls");
const download = require("./download.js");
const styles = require("./styles");

const uid = () => {
  return (
    Math.floor((1 + Math.random()) * 0x10000).toString(16) +
    "_" +
    Math.floor((1 + Math.random()) * 0x10000).toString(16)
  );
};

const getImage = (url, type, directory) => {
  getImages.getImageUrls(url, (err, images) => {
    if (!err) {
      styles.spinner1.succeed();
      styles.green(images.length + " images found");
      // start the progress bar with a total value of 200 and start value of 0
      if (images.length > 0) {
        styles.bar.start(images.length, 0);
        fetch(directory, type, images);
      }
    }
  });
};

const fetch = (directory, type, images) => {
  images.forEach((element) => {
    const name = uid();
    download.saveImg(directory, name, element.url);
  });
  return "done";
};

module.exports = { getImage };
