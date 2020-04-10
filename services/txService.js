const Tx = require('../models/Transaction')

module.exports = {
  findAll: (req, res) => {
    Tx.find(req.query)
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: 'Failed to get all tx', err}))
  },
  findById: (req, res) => {
    Tx.findById(req.params.id)
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: `Failed to find tx ${req.params.id}`, err}))
  },
  create: (req, res) => {
    Tx.create(req.body)
      .then(newPr => res.json(newPr))
      .catch(err => res.status(400).json({message: 'Failed to create a new tx', err}))
  },
}