import React, {useEffect, useState} from "react";
import {createProduct, fetchOwnerProducts} from "../api/api";
import {Link} from "react-router-dom";

const renderProducts = (products) => {
  const renderOne = (pr) => <div className="col-3 grid-margin">
    <div className="card h-100">
      <h4>{ pr.title }</h4>
      <p>{ pr.sku }</p>
      <p>{ pr.price }</p>
      <Link to={`/support/${pr._id}`} className="btn btn-primary">Share</Link>
      <Link to={`products/${pr._id}/coupons`} className="btn btn-outline-secondary">Coupons</Link>
    </div>
  </div>
  return (
    <div className="row">
      {products.map(pr => renderOne(pr))}
    </div>
  )
}

export const Products = () => {
  const ownerId = localStorage.getItem("ownerId")
  const [sku, setSku] = useState("")
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async (id) => {
      const res = await fetchOwnerProducts(id)
      setProducts(res)
    }
    if (ownerId) {
      fetchData(ownerId)
    }
  }, [ownerId])

  return (
    <div className="container">
      { ownerId && ownerId !== 'undefined' ?
        <>
          { renderProducts(products) }
          <div className="row">
            <div className="col-4">
              <h3>New product</h3>
              <div className="form-group">
                <label>Product title:</label>
                <input className="form-control"
                       onChange={(e) => { setTitle(e.target.value) }}
                       value={title}
                />
                <label>Stripe product SKU:</label>
                <input className="form-control"
                       onChange={(e) => { setSku(e.target.value) }}
                       value={sku}
                />
                <label>Display price:</label>
                <input className="form-control"
                       onChange={(e) => { setPrice(e.target.value) }}
                       value={price}
                />
                <input className="btn btn-primary" value="Submit" onClick={() => {
                  createProduct({
                    title,
                    sku,
                    price,
                    ownerId
                  }).then(res => setProducts([...products, res]))
                }} />
              </div>
            </div>
          </div>
        </> :
        <>
          Please <Link to={"/demo/account"}>identify yourself</Link> first.
        </>
      }
    </div>
  )
}