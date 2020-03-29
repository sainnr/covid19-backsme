const router = require('express').Router()
const ownerRouter = require('./ownerRouter')
const couponRouter = require('./couponRouter')
const productRouter = require('./productRouter')
const productCouponRouter = require('./productCouponRouter')
const path = require('path')

router.use('/api/owners', ownerRouter)
router.use('/api/coupons', couponRouter)
router.use('/api/products', productRouter)
productRouter.use('/:productId/coupons', productCouponRouter)

router.use('/:var(demo|coupon|support)?', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router