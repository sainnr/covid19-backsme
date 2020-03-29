import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchOwner, fetchProduct} from "../api/api";

export const PurchaseCoupon = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [owner, setOwner] = useState({})
  useEffect(() => {
    const fetchData = async (id) => {
      const pr = await fetchProduct(id)
      setProduct(pr)
      const owner = await fetchOwner(pr.ownerId)
      setOwner(owner)
    }
    if (productId) {
      fetchData(productId)
    }
  }, [productId])
  return (
    <div className="container">
      <div className="jumbotron">
        { product && owner ?
          <>
            <h2>{ product.title }</h2>
            <p>{ product.ownerId }</p>
            <p>{ product.price }</p>
            <button
              className="btn btn-primary"
              id="checkout-button-sku_H001j6elMRX6zV"
              role="link"
              onClick={() => {
                const stripe = window.Stripe(owner.paymentPk);
                stripe.redirectToCheckout({
                  items: [{sku: product.sku, quantity: 1}],

                  // Do not rely on the redirect to the successUrl for fulfilling
                  // purchases, customers may not always reach the success_url after
                  // a successful payment.
                  // Instead use one of the strategies described in
                  // https://stripe.com/docs/payments/checkout/fulfillment
                  successUrl: 'https://your-website.com/success',
                  cancelUrl: 'https://your-website.com/canceled',
                }).then(function (result) {
                    if (result.error) {
                      // If `redirectToCheckout` fails due to a browser or network
                      // error, display the localized error message to your customer.
                      var displayError = document.getElementById('error-message');
                      displayError.textContent = result.error.message;
                    }
                  })
              }}
            >
              Checkout
            </button>
            <div id="error-message"/>
          </> :
          <>Wrong product page</>
        }
      </div>
    </div>
  )
}