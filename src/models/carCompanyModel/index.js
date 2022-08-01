const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

const carModelSchema = mongoose.Schema(
  {
    nameZ: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    iconZ: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

const carCompanySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    icon: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    carModel: [carModelSchema],
  },
  {
    strict: false,
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
