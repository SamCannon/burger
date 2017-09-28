//require ORM to begin building MODEL
const orm = require('../config/orm.js');


let burgerModel = {

	all: (callBack) => {

		orm.all((result) => {

			callBack(result);

		});

	},

	update: (id, callBack)=> {

		orm.update(id, callBack);

	}

};

module.exports = burgerModel;