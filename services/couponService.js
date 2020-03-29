const Coupon = require('../models/Coupon')

module.exports = {
  findAllForProduct: (req, res) => {
    Coupon.find({ productId: req.params.productId })
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: `Cannot find all coupons for product ${req.params.productId}`, err}))
  },
  findById: (req, res) => {
    Coupon.findById(req.params.id)
      .then(pr => res.json(pr))
      .catch(err => res.status(404).json({message: `Cannot find coupon ${req.params.id}`, err}))
  },
  createForProduct: (req, res) => {
    const newCoupon = new Coupon({
      productId: req.params.productId,
      isRedeemed: false,
      timestamp: new Date(),
    })
    Coupon.create(newCoupon)
      .then(newPr => res.json(newPr))
      .catch(err => res.status(422).json({message: `Failed to create a coupon for product ${req.params.productId}`, err}))
  },
  redeem: (req, res) => {
    Coupon.findById(req.params.id)
      .then(coup => {
        if (coup.isRedeemed) {
          console.error(`The coupon ${coup._id} has been already redeemed!`)
          throw Error()
        }
        coup.isRedeemed = true
        return coup.save()
      })
      .then(pr => res.json(pr))
      .catch(err => {
        console.error(err)
        return res.status(400).json({message: `A coupon ${req.params.id} cannot be redeemed (might have been redeemed previously)`, err})
      })
  }
}