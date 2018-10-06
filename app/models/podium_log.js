const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podiumLogSchema = new Schema({
  student : {
    type : Schema.Types.ObjectId,
    ref : 'Student'
  },
  batch : {
    type : Schema.Types.ObjectId,
    ref : 'Batch'
  },
  selectedDate : {
    type : Date,
    default : Date.now
  }
})

const PodiumLog = mongoose.model('PodiumLog', podiumLogSchema)

module.exports = {
  PodiumLog
}
