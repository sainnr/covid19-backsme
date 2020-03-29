const router = require('express').Router({ mergeParams: true })
const ownerService = require('../services/ownerService')

router.route('/')
  .get(ownerService.findAll)
  .post(ownerService.create)

router.route('/:id')
  .get(ownerService.findById)

module.exports = router