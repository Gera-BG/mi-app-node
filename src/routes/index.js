const express = require('express');
const router = express.Router(); 

const { getWeather } = require('../controllers/weather');
const { getCurrency } = require('../controllers/currency');
const { getTravelSummary } = require('../controllers/travel');
const { getAllCustomers, getCustomerById, createCustomer } = require('../controllers/customer');
// Rutas
router.get('/weather', getWeather);
router.get('/currency', getCurrency);
router.get('/travel', getTravelSummary);
router.get('/customers', getAllCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers', createCustomer);
module.exports = router;