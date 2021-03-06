import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchProductCoupons} from "../api/api";

const renderCoupons = (coupons) => {
  const renderOne = (c) => <div key={c._id} className="col-3 grid-margin mb-3">
    <div className="card h-100 p-3">
      <h4>{ c.productId }</h4>
      <p>Redeemed: { c.isRedeemed.toString() }</p>
      <p>Issued: { c.timestamp }</p>
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
    <div className="container pt-4">
      <h2 className="mb-4">Coupons issued for product { productId }</h2>
      { renderCoupons(coupons) }
    </div>
  )
}