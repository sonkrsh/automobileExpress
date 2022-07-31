const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const carMakeModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
// add plugin that converts mongoose to json
carMakeModelSchema.plugin(toJSON);

carMakeModelSchema.pre('save', async function (next) {
  next();
});

const CarMakeModel = mongoose.model('carMakeModel', carMakeModelSchema);

module.exports = CarMakeModel;
