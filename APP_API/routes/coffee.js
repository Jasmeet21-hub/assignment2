var express = require('express');
var router = express.Router();
const ctrlCoffee = require('../controllers/coffee');

router
.route('/coffee')
.get(ctrlCoffee.getCoffee)
.post(ctrlCoffee.createCoffee);

router
.route('/coffee/:coffee_id')
.get(ctrlCoffee.getSingleCoffee)
.put(ctrlCoffee.updateCoffee)
.delete(ctrlCoffee.deleteCoffee);

module.exports = router;