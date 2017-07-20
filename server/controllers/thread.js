const models = require('../../db/models');

module.exports.getThread = (req, res) => {
  models.Message.where({ thread_id: req.params.thread }).fetchAll()
  .then(messages => {
    console.log('req.params', req.params)
    res.status(200).send(messages);
  })
  .error(err => {
    res.status(500).send(err);
  })
  .catch(() => {
    res.sendStatus(404);
  });
}
