const router = require('express').Router({ mergeParams: true })
const couponService = require('../services/couponService')

router.route('/')
  .get(couponService.findAllForProduct)
  .post(couponService.createForProduct)

router.route('/:id')
  .get(couponService.findById)
  .delete(couponService.redeem)

module.exports = router