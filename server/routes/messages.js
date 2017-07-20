'use strict';
const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const MessageController = require('../controllers').Messages;

router.route('/')
  .post( middleware.auth.verify, (req, res) => {
    console.log('Inside Routes messages.js POST');
    MessageController.create(req, res);
  });

router.route('/')
  .get( middleware.auth.verify, (req, res) => {
    console.log('Inside Routes messages.js GET ');
    MessageController.getAll(req, res);
  });

router.route('/:id')
  .get( middleware.auth.verify, (req, res) => {
    console.log(`Inside Routes messages.js GET for /${req.params.id}`);
    MessageController.getOne(req, res);
  })

<<<<<<< HEAD
<<<<<<< HEAD
router.route('/:id/:type/:typeid')
  .put( middleware.auth.verify, (req, res) => {
    console.log(`Inside Routes message.js PUT for /${req.params.id}`);
    MessageController.update(req, res);
  });;


module.exports = router;
=======
module.exports = router;
>>>>>>> mail read view pulls thread data from DB
=======
module.exports = router;
>>>>>>> merge conflict resolved
