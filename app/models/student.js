const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Batch} = require('./batch');

const studentSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    //required : true
  },
  mobile : {
    type : Number,
    //required : true
  },
  batches : [{
    type: Schema.Types.ObjectId,
    ref : 'Batch'
  }]
})


studentSchema.post('save', function(){
  Batch.findById(this.batches).then((batch) => {
    batch.students.push(this.id)
    batch.save();
  }).catch((err) => {
    res.send(err);
  })
})

const Student = mongoose.model('Student', studentSchema);

module.exports = {
  Student
}
