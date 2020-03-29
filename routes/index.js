const router = require('express').Router()

router.use((req, res) => {
  res.send('get started')
})

module.exports = router