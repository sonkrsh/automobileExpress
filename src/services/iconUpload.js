const sharp = require('sharp');
const path = require('path');
const _ = require('lodash');

const iconUpload = (data, imgShortId, folderName) => {
  sharp(data.file.buffer)
    .resize(_.toNumber(process.env.IMAGE_RESIZE))
    .jpeg({ quality: _.toNumber(process.env.IMAGE_QUALITY) })
    .toFile(path.join(path.dirname(__dirname), `./uploads/${folderName}/${imgShortId}`));
};

module.exports = iconUpload;
