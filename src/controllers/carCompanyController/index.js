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

module.exports = {
  createCarCompany,
};
