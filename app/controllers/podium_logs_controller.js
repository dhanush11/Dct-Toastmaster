const express = require('express');
const router = express.Router();
const {PodiumLog} = require('../models/podium_log');

router.get('/', (req, res) => {
  PodiumLog.find().then((podiums) => {
    res.send(podiums)
  })
})

router.post('/', (req, res) => {
  let body = req.body;
  let podium = new PodiumLog(body);
  podium.save().then((podium) => {
    res.send(podium)
  }).catch((err) => {
    res.send(err)
  })
})

module.exports = {
  podiumsController : router
}
