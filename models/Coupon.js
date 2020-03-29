const mongoose = require('mongoose')
const Schema = mongoose.Schema

const couponSchema = new Schema({
  productId: { type: String, required: true },
  isRedeemed: { type: Boolean, required: true },
  timestamp: { type: Date, required: true },
})

const Coupon = mongoose.model('Coupon', couponSchema)

module.exports = Coupon