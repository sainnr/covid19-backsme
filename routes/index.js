const router = require('express').Router()
const productRouter = require('./productRouter')

router.use('/api/products', productRouter)

router.use((req, res) => {
  res.send('get started')
})

module.exports = router