const httpStatus = require('http-status');
const _ = require('lodash');
const sharp = require('sharp');
const path = require('path');
const shortid = require('shortid');
const { CarCompany } = require('../../models');
const ApiError = require('../../utils/ApiError');

const createcarModel = async (data) => {
  const isCarModelExsits = await CarCompany.find({ 'carModel.name': data.body.name, _id: data.body.car_company_id });

  if (_.isEmpty(isCarModelExsits)) {
    const imgShortId = `${shortid.generate()}-${data.file.originalname}`;
    const combineData = {
      name: data.body.name,
      img: `${process.env.IMAGE_URL}carModel/${imgShortId}`,
    };
    await sharp(data.file.buffer)
      .resize(_.toNumber(process.env.IMAGE_RESIZE))
      .jpeg({ quality: _.toNumber(process.env.IMAGE_QUALITY) })
      .toFile(path.join(path.dirname(__dirname), `.././uploads/carModel/${imgShortId}`));

    const check = await CarCompany.findByIdAndUpdate(
      { _id: data.body.car_company_id },
      {
        $push: {
          carModel: combineData,
        },
      },
      {
        new: true,
      }
    );
    if (check == null) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Parent Id Not Exsists');
    }
    return check;
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'Already in DB');
};
const editcarModel = async (data) => {
  const newZ = {
    // _id: '62f08042cc256e06e486ddfb',
    name: 'badla',
    img: 'http://localhost:3000/carModel/Yop7MI8wC-download.jpeg',
  };
  const check = await CarCompany.update({ 'carModel._id': data.body.id }, newZ);
  return check;
  // throw new ApiError(httpStatus.BAD_REQUEST, 'Already in DB');
};

module.exports = {
  createcarModel,
  editcarModel,
};
