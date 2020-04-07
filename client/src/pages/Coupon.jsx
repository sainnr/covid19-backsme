import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchCoupon, redeemCoupon} from "../api/api";
import QRCode from "qrcode"

export const Coupon = () => {
  const { couponId } = useParams()
  const [coupon, setCoupon] = useState({})
  const [qrData, setQrData] = useState()
  useEffect(() => {
    const fetchData = async (id) => {
      const res = await fetchCoupon(id)
      setCoupon(res)
      const qr = await QRCode.toDataURL(window.location.href)
      setQrData(qr)
    }
    if (couponId) {
      fetchData(couponId)
    }
  }, [couponId])

  return (
    <div className="container">
      {coupon ? <div className="jumbotron mt-3">
        <h3>Unique coupon ID: {coupon._id}</h3>
        <img src={qrData} alt={qrData} />
        <p>Product: {coupon.productId}</p>
        <p>Redeemed: { `${coupon.isRedeemed}` }</p>
        <p>Issued on: {coupon.timestamp}</p>
        <input className="btn btn-primary" type="button" value="Redeem" onClick={() => {
          if (!coupon.isRedeemed) {
            redeemCoupon(coupon._id).then(res => setCoupon(res))
          }
        }}/>
      </div> : <>Invalid coupon URL</>
      }
    </div>
  )
}