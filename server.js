var express = require('express');
var app = express();

var PORT = process.env.PORT || 9001;
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var logger = require('morgan');

var Comment = require('./comment.js');

//Mongoose 
mongoose.connect('mongodb://localhost/scraperDB');
var db = mongoose.connection;

//Handlebars
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//scrape 
request('', function(err, res, html){
  var $ = cheerio.load(html);
  var result = [];

})

app.get('/'function(req, res){

});

app.listen(9001, function(){
  console.log('Goliath Online on port', 9001);
});