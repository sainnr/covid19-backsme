const router = require('express').Router()
const productRouter = require('./productRouter')
const productCouponRouter = require('./productCouponRouter')
const couponRouter = require('./couponRouter')

router.use('/api/products', productRouter)
router.use('/api/coupons', couponRouter)
productRouter.use('/:productId/coupons', productCouponRouter)

router.use((req, res) => {
  res.send('get started')
})

module.exports = router