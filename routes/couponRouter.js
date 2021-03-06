const router = require('express').Router({ mergeParams: true })
const couponService = require('../services/couponService')

router.route('/:id')
  .get(couponService.findById)
  .delete(couponService.redeem)

module.exports = router