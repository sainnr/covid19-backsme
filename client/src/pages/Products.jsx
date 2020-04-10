import React, {useEffect, useState} from "react";
import {createProduct, fetchOwnerProducts} from "../api/api";
import {Link} from "react-router-dom";

const renderProducts = (products) => {
  const renderOne = (pr) => <div key={pr._id} className="col-3 grid-margin mb-3">
    <div className="card h-100 p-3">
      <h4>{pr.title}</h4>
      <p>SKU: {pr.sku}</p>
      <p>Display Price: {pr.unit}{pr.price.toFixed(2)}</p>
      <div className="d-flex">
        <Link to={`/support/${pr._id}`} className="btn btn-primary fit-c mr-2">Offer</Link>
        <Link to={`products/${pr._id}/coupons`} className="btn btn-outline-secondary fit-c">Coupons</Link>
      </div>
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
  const [unit, setUnit] = useState("")
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
      {ownerId && ownerId !== 'undefined' ?
        <>
          <div className="jumbotron mt-3">
            <h3>Add a new product</h3>
            <p>
              Use this page to create new products so you could issue coupons for them later.
              Make sure you registered them in Stripe first, and don't forget to specify a valid Stripe SKU here.
              It will be used at checkout when your customers will be purchasing coupons for the products.
            </p>
            <div className="form-row">
              <div className="form-group col-3">
                <label>Product title:</label>
                <input className="form-control"
                       onChange={(e) => {
                         setTitle(e.target.value)
                       }}
                       value={title}
                       placeholder="How customers recognise it"
                />
              </div>
              <div className="form-group col-3">
                <label>Stripe product SKU:</label>
                <input className="form-control"
                       onChange={(e) => {
                         setSku(e.target.value)
                       }}
                       value={sku}
                       placeholder="Copy SKU from Stripe here"
                />
              </div>
              <div className="form-group col-2">
                <label>Display price:</label>
                <input className="form-control"
                       onChange={(e) => {
                         setPrice(e.target.value)
                       }}
                       value={price}
                       placeholder="For display only"
                />
              </div>
              <div className="form-group col-1">
                <label>Currency:</label>
                <input className="form-control"
                       onChange={(e) => {
                         setUnit(e.target.value)
                       }}
                       value={unit}
                       placeholder="£, $, €"
                />
              </div>
            </div>
            <input type="button" className="btn btn-primary" value="Create" onClick={() => {
              createProduct({
                title,
                sku,
                price,
                ownerId,
                unit
              }).then(res => setProducts([...products, res]))
            }}/>
          </div>
          { products && products.length > 0 && <h2 className="mb-4">Existing products</h2> }
          {renderProducts(products)}
        </> :
        <>
          Please <Link to={"/demo/account"}>identify yourself</Link> first.
        </>
      }
    </div>
  )
}