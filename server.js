const express           = require('express');
const mustache          = require ('mustache');
const mustacheExpress   = require('mustache-express');
const path              = require ('path');
const routes            = require("./routes/index");
const bodyParser        = require ("body-parser");
const expressValidator  = require("express-validator");
const app               = express();
const jsonfile          = require('jsonfile')
const file              = '/tmp/data.json'


app.engine ('mustache', mustacheExpress());
app.set ("views", path.join(__dirname, "views"));
app.set ('view engine', 'mustache');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());





app.use(routes);
app.use(express.static('public'));



app.listen(3000, function(){
    console.log("app is running on localhost:3000");
});

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
})
