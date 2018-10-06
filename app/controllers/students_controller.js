const express = require('express');
const _ = require('lodash');
const router = express.Router();
const {Student} = require('../models/student');

router.get('/', (req, res) => {
  Student.find().then((students) => {
    res.send(students);
  }).catch((err) => {
    res.send(err);
  })
})

router.post('/', (req, res) => {
  let body = _.pick(req.body, ['name', 'mobile', 'email', 'batches'])
  let student = new Student(body)
  student.save().then((student) => {
    res.send({
      student,
      notice : 'Successfully Created Student'
    })
  }).catch((err) => {
    res.send(err);
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  Student.findById(id).then((student) => {
    res.send(student);
  }).catch((err) => {
    res.send(err);
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'email', 'mobile', 'batches']);
  Student.findByIdAndUpdate(id, {$set: body}, { new : true}).then((student) => {
    res.send({
      student,
      msg : 'Successfully updated'
    });
  }).catch((err) => {
    res.send(err);
  })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  Student.findByIdAndRemove(id).then((student) => {
    if(student){
      res.send({
        student,
        msg : 'Successfully removed student'
      })
    }
  }).catch((err) => {
    res.send(err)
  })
})

module.exports = {
  studentsController : router
}
