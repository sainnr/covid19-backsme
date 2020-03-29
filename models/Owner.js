const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ownerSchema = new Schema({
  paymentPk: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
})

const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner