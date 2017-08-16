const express           = require('express');
const mustache          = require ('mustache');
const mustacheExpress   = require('mustache-express');
const path              = require ('path');
const routes            = require("./routes/index");
const bodyParser        = require ("body-parser");
const expressValidator  = require("express-validator");
const app               = express();


app.engine ('mustache', mustacheExpress());
app.set ('views', './views');
app.set ('view engine', 'mustache');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());


app.use(routes);



app.listen(3000, function(){
    console.log("app is running on localhost:3000");
});
