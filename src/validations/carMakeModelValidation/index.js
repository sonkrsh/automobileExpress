const Joi = require('joi');

const createCarMakeModel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createCarMakeModel,
};
