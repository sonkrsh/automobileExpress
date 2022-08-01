const catchAsync = require('../../utils/catchAsync');
// const { carCompanyService } = require('../../services');

const createCarCompany = catchAsync(async (req, res) => {
  // const user = await carCompanyService.createcarCompany(req.body);
  // res.send({ user });
});

module.exports = {
  createCarCompany,
};
