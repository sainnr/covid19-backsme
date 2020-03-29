import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchCoupon, redeemCoupon} from "../api/api";

export const Coupon = () => {
  const { couponId } = useParams()
  const [coupon, setCoupon] = useState({})
  useEffect(() => {
    const fetchData = async (id) => {
      const res = await fetchCoupon(id)
      setCoupon(res)
    }
    if (couponId) {
      fetchData(couponId)
    }
  }, [couponId])

  return (
    <div className="container">
      {coupon ? <div className="jumbotron">
        <h3>{coupon._id}</h3>
        <p>Product: {coupon.productId}</p>
        <p>Redeemed: { `${coupon.isRedeemed}` }</p>
        <p>Issued on: {coupon.timestamp}</p>
        <input className="btn btn-primary" value="Redeem" onClick={() => {
          if (!coupon.isRedeemed) {
            redeemCoupon(coupon._id).then(res => setCoupon(res))
          }
        }}/>
      </div> : <>Invalid coupon URL</>
      }
    </div>
  )
}