const httpStatus = require('http-status');
const _ = require('lodash');
const sharp = require('sharp');
const path = require('path');
const shortid = require('shortid');
const { CarCompany } = require('../../models');
const ApiError = require('../../utils/ApiError');

const getById = async (id) => {
  return CarCompany.findById(id);
};

const createcarCompany = async (data) => {
  const imgShortId = `${shortid.generate()}-${data.file.originalname}`;
  const combineData = {
    name: data.body.name,
    icon: process.env.IMAGE_URL + imgShortId,
  };

  const check = await CarCompany.findOne(data.body);

  if (_.isEmpty(check)) {
    await sharp(data.file.buffer)
      .resize(500)
      .jpeg({ quality: 50 })
      .toFile(path.join(path.dirname(__dirname), `.././uploads/${imgShortId}`));
    return CarCompany.create(combineData);
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'Already in DB');
};

const editcarCompany = async (data) => {
  const carCompany = await getById(data.id);
  if (!carCompany) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  Object.assign(carCompany, data);
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
