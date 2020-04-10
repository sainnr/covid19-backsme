const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  customerEmail: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  productId: { type: String, required: true },
  ownerId: { type: String, required: true },
  timestamp: { type: Date, required: true },
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction