const Joi = require('joi');

const createCarCompany = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    carModel: Joi.array(),
    icon: Joi.any(),
  }),
};

const editCarCompany = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string(),
    carModel: Joi.array(),
    icon: Joi.any(),
  }),
};

module.exports = {
  createCarCompany,
  editCarCompany,
};
