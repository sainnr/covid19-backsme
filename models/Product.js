const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  ownerId: { type: String, required: true },
  sku: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product