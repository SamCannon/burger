const express = require('express')
const connection = require('../config/connection.js');
const burgerModel = require('../models/burger.js');

var router = express.Router();

// define the home page route
router.get('/', (req, res) => {

	burgerModel.all((data) => {
		console.log(data);
		res.render('index', {data:data});
	});
	
});

router.put('/burgers/update', (req, res) => {

	burgerModel.update(req.body.burger_id, (result) => {

		console.log("result: ", result);

		res.redirect('/');

	});

});

module.exports = router;