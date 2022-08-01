const Joi = require('joi');

const createCarCompany = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    carModel: Joi.array(),
    icon: Joi.any(),
  }),
};

module.exports = {
  createCarCompany,
};
