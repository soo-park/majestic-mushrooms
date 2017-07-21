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
//   .get(MessageController.getOne)  
//   .put(MessageController.update)
//   // .delete(MessageController.deleteOne)

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
module.exports = router;
>>>>>>> mail read view pulls thread data from DB
=======
module.exports = router;
>>>>>>> merge conflict resolved
=======
>>>>>>> mail read view pulls thread data from DB
>>>>>>> new routes implemented
=======
module.exports = router;
>>>>>>> 1a3d5d53f04c3dac5e3fd66892c52d7df66ebdf3
