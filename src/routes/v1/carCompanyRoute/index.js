const express = require('express');
const validate = require('../../../middlewares/validate');
const carCompanyController = require('../../../controllers/carCompanyController');
const carCompanyValidation = require('../../../validations/carCompanyValidation');

const router = express.Router();

router.route('/carCompany').post(validate(carCompanyValidation.createCarCompany), carCompanyController.createCarCompany);

module.exports = router;
