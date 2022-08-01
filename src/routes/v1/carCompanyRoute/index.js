const express = require('express');
const validate = require('../../../middlewares/validate');
const { carCompanyController } = require('../../../controllers');
const { carCompanyValidation } = require('../../../validations');
const upload = require('../../../utils/multer');

const router = express.Router();

router
  .route('/carCompany')
  .post(upload.single('icon'), validate(carCompanyValidation.createCarCompany), carCompanyController.createCarCompany)
  .patch(validate(carCompanyValidation.editCarCompany), carCompanyController.editCarCompany);
module.exports = router;
