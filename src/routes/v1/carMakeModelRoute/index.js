const express = require('express');
const validate = require('../../../middlewares/validate');
const carMakeModelController = require('../../../controllers/carMakeModelController');
const carMakeModelValidation = require('../../../validations/carMakeModelValidation');

const router = express.Router();

router.route('/carMakeModel').post(validate(carMakeModelValidation.createCarMakeModel), carMakeModelController.createCarMakeModel);

module.exports = router;
