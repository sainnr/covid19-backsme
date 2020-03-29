const router = require('express').Router()
const productRouter = require('./productRouter')
const couponRouter = require('./couponRouter')

router.use('/api/products', productRouter)
productRouter.use('/:productId/coupons', couponRouter)

router.use((req, res) => {
  res.send('get started')
})

module.exports = router