const router = require('express').Router({ mergeParams: true })
const txService = require('../services/txService')

router.route('/')
  .get(txService.findAll)
  .post(txService.create)

router.route('/:id')
  .get(txService.findById)

module.exports = router