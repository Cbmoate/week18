var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentSchema = new Schema({
  title: {type: String},
  link: {type: String},
 
});

var Content = mongoose.model("Content", ContentSchema);
module.exports = Content;