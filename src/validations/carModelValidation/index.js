const Joi = require('joi');

const createCarModel = {
  body: Joi.object().keys({
    car_company_id: Joi.string().required(),
    name: Joi.string().required(),
    icon: Joi.any(),
  }),
};
const editCarModel = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().required(),
    icon: Joi.any(),
  }),
};

module.exports = {
  createCarModel,
  editCarModel,
};
