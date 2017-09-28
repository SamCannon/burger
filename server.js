const express = require("express");
const exphb = require("express-handlebars");
const bodyParse = require("body-parser");
const methOver = require("method-override");
const mysql = require("mysql");
const burgCont = require("./controllers/burgers_controller.js");

const app = express();
const PORT = 3500;

app.use(bodyParse.urlencoded({
	extended: false
}));

app.use(methOver('_method'));

app.engine('handlebars', exphb({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use('/', burgCont);

app.listen(PORT, () => {

	console.log("listening on: ", PORT);

});