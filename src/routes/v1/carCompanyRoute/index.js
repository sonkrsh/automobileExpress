const express = require('express');
const validate = require('../../../middlewares/validate');
const { carCompanyController } = require('../../../controllers');
const { carCompanyValidation } = require('../../../validations');
const upload = require('../../../utils/multer');
const auth = require('../../../middlewares/auth');

const router = express.Router();

router
  .route('/carCompany')
  .post(
    auth(),
    upload.single('icon'),
    validate(carCompanyValidation.createCarCompany),
    carCompanyController.createCarCompany
  )
  .patch(auth(), validate(carCompanyValidation.editCarCompany), carCompanyController.editCarCompany)
  .delete(auth(), validate(carCompanyValidation.deleteCarCompany), carCompanyController.deleteCarCompany);
module.exports = router;
