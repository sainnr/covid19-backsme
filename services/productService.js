const Product = require('../models/Product')

module.exports = {
  findAll: (req, res) => {
    Product.find(req.query)
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: 'Failed to get all products', err}))
  },
  findById: (req, res) => {
    Product.findById(req.params.id)
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: `Failed to find product ${req.params.id}`, err}))
  },
  create: (req, res) => {
    Product.create(req.body)
      .then(newPr => res.json(newPr))
      .catch(err => res.status(400).json({message: 'Failed to create a new product', err}))
  },
  remove: (req, res) => {
    Product.findById({ _id: req.params.id })
      .then(pr => pr.remove())
      .then(removed => res.json(removed))
      .catch(err => res.status(422).json({message: `Cannot remove product ${req.params.id}`, err}))
  }
}