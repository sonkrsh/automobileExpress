const Joi = require('joi');

const createCarCompany = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createCarCompany,
};
