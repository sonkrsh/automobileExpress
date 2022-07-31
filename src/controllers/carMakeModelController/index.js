const catchAsync = require('../../utils/catchAsync');
// const { carMakeModelService } = require('../../services');

const createCarMakeModel = catchAsync(async (req, res) => {
  // const user = await carMakeModelService.createcarMakeModel(req.body);
  // res.send({ user });
});

module.exports = {
  createCarMakeModel,
};
