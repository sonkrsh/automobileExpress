const express = require('express');
const validate = require('../../../middlewares/validate');
const { carModelController } = require('../../../controllers');
const { carModelValidation } = require('../../../validations');
const upload = require('../../../utils/multer');
const auth = require('../../../middlewares/auth');

const router = express.Router();

router
  .route('/carModel')
  .post(auth(), upload.single('icon'), validate(carModelValidation.createCarModel), carModelController.createCarModel)
  .patch(auth(), validate(carModelValidation.editCarModel), carModelController.editCarModel);

module.exports = router;
