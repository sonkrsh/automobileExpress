const httpStatus = require('http-status');
const _ = require('lodash');

const shortid = require('shortid');
const iconUpload = require('../iconUpload');
const { CarCompany } = require('../../models');
const ApiError = require('../../utils/ApiError');

const getById = async (id) => {
  return CarCompany.findById(id);
};

const generateImageName = (data) => {
  let imgShortId = null;
  let combineData = null;
  if (data.file) {
    imgShortId = `${shortid.generate()}-${data.file.originalname}`;
    combineData = {
      name: data.body.name,
      icon: `${process.env.IMAGE_URL}${process.env.UPLOAD_ICON_DIR}/${imgShortId}`,
    };
  }
  return {
    imgShortId,
    combineData,
  };
};

const createcarCompany = async (data) => {
  const dataInSequence = generateImageName(data);

  const check = await CarCompany.findOne(data.body);

  if (_.isEmpty(check)) {
    await iconUpload(data, dataInSequence.imgShortId, process.env.UPLOAD_ICON_DIR);
    return CarCompany.create(dataInSequence.combineData);
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'Already in DB');
};

const editcarCompany = async (data) => {
  const carCompany = await getById(data.body.id);
  if (!carCompany) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (data.file) {
    const dataInSequence = generateImageName(data);
    await iconUpload(data, dataInSequence.imgShortId, process.env.UPLOAD_ICON_DIR);
    Object.assign(carCompany, dataInSequence.combineData);
  } else {
    Object.assign(carCompany, data.body);
  }

  await carCompany.save();
  return carCompany;
};

const deletecarCompany = async (data) => {
  const carCompany = await getById(data.id);
  if (!carCompany) {
    throw new ApiError(httpStatus.NOT_FOUND, 'car company not found');
  }
  await carCompany.remove();
  return carCompany;
};
const getcarCompany = async () => {
  const allcarCompany = await CarCompany.find();
  return allcarCompany;
};

module.exports = {
  createcarCompany,
  editcarCompany,
  deletecarCompany,
  getcarCompany,
};
