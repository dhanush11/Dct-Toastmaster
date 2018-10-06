const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const batchSchema = new Schema({
  name : {
    type : String,
    required : true,
    unique : true
  },
  startDate : {
    type : Date,
    required : true
  },
  students : [{
    type: Schema.Types.ObjectId,
    ref : 'Student'
  }],
  createdAt : {
    type : Date,
    default : Date.now
  },
  frequency : {
    type : Number,
    required : true,
    min : 1
  }
})

batchSchema.pre('save', function(next){
  this.startDate = moment(this.startDate).format('YYYY-MM-DD');
  next()
})

const Batch = mongoose.model('Batch', batchSchema);

module.exports = {
  Batch
}
