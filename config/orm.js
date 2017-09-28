const connection = require('./connection.js');


let orm = { 
	// all: (data) => {
	// 	console.log('hello');
	
	// }

	all: (callBack) => {

		connection.query('SELECT * FROM burgers;', (err, result) => {

			callBack(result);

		});

	},

	update: (devId, callBack) => {

		connection.query('UPDATE burgers SET devoured=true WHERE id=' + devId + ';', (err, result) => {

			if(err) throw err;

			callBack(result);
		});


	},
		
	create: (newBurger, callBack) => {

		connection.query('INSERT INTO burgers (burger_name) VALUES' + newBurger + ';', /**[req.body.burger],**/ (err, result) => {

			if(err)throw err;
			
			callBack(result);

		});
	}
	
};

module.exports = orm;