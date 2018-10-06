const express = require('express');
const _ = require('lodash');
const router = express.Router();
const {Batch} = require('../models/batch');

router.get('/', (req, res) => {
  Batch.find().populate('students').then((batches) => {
    res.send(batches);
  }).catch((err) => {
    res.send(err);
  })
})


router.post('/', (req, res) => {
  let body = _.pick(req.body, ['name', 'startDate', 'students', 'frequency'])
  let batch = new Batch(body)
  batch.save().then((batch) => {
    res.send({
      batch,
      notice : 'Successfully Created Batch'
    })
  }).catch((err) => {
    res.send(err);
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  Batch.findById(id).populate('students').then((batch) => {
    res.send(batch);
  }).catch((err) => {
    res.send(err);
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'startDate', 'students', 'frequency']);
  Batch.findByIdAndUpdate(id, {$set: body}, { new : true}).then((batch) => {
    res.send({
      batch,
      msg : 'Successfully updated'
    });
  }).catch((err) => {
    res.send(err);
  })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  Batch.findByIdAndRemove(id).then((batch) => {
    if(batch){
      res.send({
        batch,
        msg : 'Successfully removed batch'
      })
    }
  }).catch((err) => {
    res.send(err)
  })
})

module.exports = {
  batchesController : router
}
