import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchOwner, fetchProduct, issueCoupon} from "../api/api";

export const PurchaseCoupon = () => {
  const { productId } = useParams()
  const { status } = useParams()
  const [product, setProduct] = useState({})
  const [owner, setOwner] = useState({})
  const [newCoupon, setNewCoupon] = useState({})
  useEffect(() => {
    const fetchData = async (id) => {
      const pr = await fetchProduct(id)
      setProduct(pr)
      const owner = await fetchOwner(pr.ownerId)
      setOwner(owner)
      if (status === 'success') {
        const coupon = await issueCoupon(productId)
        setNewCoupon(coupon)
      }
    }
    if (productId) {
      fetchData(productId)
    }
  }, [productId, status])
  return (
    <div className="container">
      <div className="jumbotron">
        { product && owner ?
          <>
            <h2>{ product.title }</h2>
            <p>Company: { product.ownerId }</p>
            <p>Estimated price: { product.price }</p>
            { status !== 'success' && <>
              Support your favourite company by purchasing the coupon that you can use later:
              <button
                className="btn btn-primary"
                role="link"
                onClick={() => {
                  const url = window.location.href
                  const stripe = window.Stripe(owner.paymentPk);
                  stripe.redirectToCheckout({
                    items: [{sku: product.sku, quantity: 1}],
                    successUrl: `${url}/success`,
                    cancelUrl: `${url}/cancelled`,
                  }).then(result => {
                    if (result.error) {
                      const displayError = document.getElementById('error-message');
                      displayError.textContent = result.error.message;
                    }
                  })
                }}
              >
                Buy Coupon
              </button>
            </>}
            { status === 'cancelled' && <div className="alert alert-warning">Payment has been cancelled</div> }
            { status === 'success' && <>
              <div className="alert alert-success">Payment successful!</div>
              { newCoupon && <>
                <label>View your coupon:</label>
                <Link to={`/coupon/${newCoupon._id}`} className="btn btn-success">Show</Link>
              </>
              }
            </>
            }
            <div id="error-message"/>
          </> :
          <>Wrong product page</>
        }
      </div>
    </div>
  )
}