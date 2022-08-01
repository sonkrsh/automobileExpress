const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const carCompanySchema = mongoose.Schema(
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
carCompanySchema.plugin(toJSON);

carCompanySchema.pre('save', async function (next) {
  next();
});

const CarCompany = mongoose.model('carCompany', carCompanySchema);

module.exports = CarCompany;
