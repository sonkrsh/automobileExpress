const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { carModelService } = require('../../services');

const ApiError = require('../../utils/ApiError');

const createCarModel = catchAsync(async (req, res) => {
  if (req.file) {
    const carModel = await carModelService.createcarModel(req);
    res.send({ carModel });
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Please Upload Image');
  }
});

const editCarModel = catchAsync(async (req, res) => {
  const carCompanyEdit = await carModelService.editcarModel(req);
  res.send({ carCompanyEdit });
});
module.exports = {
  createCarModel,
  editCarModel,
};
