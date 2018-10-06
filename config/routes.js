const express = require('express');
const router = express.Router();
const {batchesController} = require('../app/controllers/batches_controller');
const {studentsController} = require('../app/controllers/students_controller');
const {podiumsController} = require('../app/controllers/podium_logs_controller');


router.use('/batches', batchesController);
router.use('/students', studentsController);
router.use('/podiums', podiumsController);
router.use('/', (req, res) => {
    res.sendFile('./app.html', {root:'./html'})
})


module.exports = {
  router
}
