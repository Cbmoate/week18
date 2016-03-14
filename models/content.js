var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentSchema = new Schema({
  title: {type: String},
  link: {type: String},
  comment: [{
    type: Schema.Types.ObjectID,
    ref: 'Comment'
  }]
});

var Content = mongoose.model("Comment", ContentSchema);
module.exports = Content;