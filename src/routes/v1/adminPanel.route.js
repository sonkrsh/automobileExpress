// ADD_ROUTES
const carModelRoute = require('./carModelRoute'); // carModel

const carCompanyRoute = require('./carCompanyRoute'); // carCompany

const combineRoute = [carCompanyRoute, carModelRoute];
module.exports = combineRoute;
