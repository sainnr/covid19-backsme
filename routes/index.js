const router = require('express').Router()
const ownerRouter = require('./ownerRouter')
const couponRouter = require('./couponRouter')
const productRouter = require('./productRouter')
const productCouponRouter = require('./productCouponRouter')

router.use('/api/owners', ownerRouter)
router.use('/api/coupons', couponRouter)
router.use('/api/products', productRouter)
productRouter.use('/:productId/coupons', productCouponRouter)

router.use((req, res) => {
  res.send('get started')
})

module.exports = router