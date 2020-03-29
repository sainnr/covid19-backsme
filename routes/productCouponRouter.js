const router = require('express').Router({ mergeParams: true })
const couponService = require('../services/couponService')

router.route('/')
  .get(couponService.findAllForProduct)
  .post(couponService.createForProduct)

module.exports = router