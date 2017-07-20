'use strict';
const express = require('express');
const router = express.Router();
const Thread = require('../controllers').Thread;

router.route('/:thread')
.get((req, res) => {
  Thread.getThread(req, res);
  console.log(req.url);
})

module.exports = router;