import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchProductCoupons} from "../api/api";

const renderCoupons = (coupons) => {
  const renderOne = (c) => <div className="col-3 grid-margin">
    <div className="card h-100">
      <h4>Product { c.productId }</h4>
      <p>Redeemed: { c.isRedeemed.toString() }</p>
      <p>Issued on { c.timestamp }</p>
    </div>
  </div>
  return (
    <div className="row">
      {coupons.map(c => renderOne(c))}
    </div>
  )
}

export const ProductCoupons = () => {
  const { productId } = useParams()
  const [coupons, setCoupons] = useState([])
  useEffect(() => {
    const fetchData = async (id) => {
      const res = await fetchProductCoupons(id)
      setCoupons(res)
    }
    if (productId) {
      fetchData(productId)
    }
  }, [productId])

  return (
    <div className="container">
      { renderCoupons(coupons) }
    </div>
  )
}