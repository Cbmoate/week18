var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;