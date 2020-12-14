const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const CommentSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comment:{
    type: String,
    require: true
  },
  date_Comment: {
      type: Date,
      default: Date.now,
  }
})


CommentSchema.plugin(mongoosePaginate);
mongoose.model('Comments', CommentSchema)