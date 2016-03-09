var express = require('express');
var app = express();
var PORT = process.env.PORT || 9001;
var request = require('request');
var cheerio = require('cheerio');

//Handlebars
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));