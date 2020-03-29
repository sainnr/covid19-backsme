const express = require('express')
const app = express()

// Routing
const PORT = process.env.PORT || 5000
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

// Persistence
require('./models')

app.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }.`)
})