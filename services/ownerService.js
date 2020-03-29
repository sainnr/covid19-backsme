const Owner = require('../models/Owner')

module.exports = {
  findAll: (req, res) => {
    Owner.find(req.query)
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: 'Failed to get all owners', err}))
  },
  findById: (req, res) => {
    Owner.findById(req.params.id)
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: `Failed to find owner ${req.params.id}`, err}))
  },
  create: (req, res) => {
    Owner.create(req.body)
      .then(newPr => res.json(newPr))
      .catch(err => res.status(400).json({message: 'Failed to create a new owner', err}))
  },
}