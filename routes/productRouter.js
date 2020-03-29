const router = require('express').Router()
const productService = require('../services/productService')

router.route('/')
  .get(productService.findAll)
  .post(productService.create)

router.route('/:id')
  .get(productService.findById)
  .delete(productService.remove)

module.exports = router