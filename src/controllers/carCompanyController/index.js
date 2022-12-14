const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const ApiError = require('../../utils/ApiError');
const { carCompanyService } = require('../../services');

const createCarCompany = catchAsync(async (req, res) => {
  if (req.file) {
    const carCompany = await carCompanyService.createcarCompany(req);
    res.send({ carCompany });
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Please Upload Image');
  }
});
const editCarCompany = catchAsync(async (req, res) => {
  const carCompanyEdit = await carCompanyService.editcarCompany(req);
  res.send({ carCompanyEdit });
});

const deleteCarCompany = catchAsync(async (req, res) => {
  await carCompanyService.deletecarCompany(req.body);
  res.send('Succesfully Deleted');
});

const getCarCompany = catchAsync(async (req, res) => {
  const carCompanyData = await carCompanyService.getcarCompany(req.body);
  res.send({ carCompanyData });
});

module.exports = {
  createCarCompany,
  editCarCompany,
  deleteCarCompany,
  getCarCompany,
};
