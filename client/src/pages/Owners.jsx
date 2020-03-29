import React, {useEffect, useState} from "react";
import {fetchAllOwners, registerOwner} from "../api/api";
import {Link} from "react-router-dom";

const identify = (uid, owners, setFn) => {
  if (owners.map(o => o._id).some(id => id === uid)) {
    localStorage.setItem("ownerId", uid)
    setFn(uid)
    console.log(`Identified as ${uid}`)
  } else {
    console.log(uid)
    console.log(owners)
  }
}

export const Owners = () => {
  const [existingId, setExistingId] = useState(localStorage.getItem("ownerId"))
  const [ownerId, setOwnerId] = useState("")
  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")
  const [paymentPk, setPaymentPk] = useState("")
  const [owners, setOwners] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllOwners() // todo: don't fetch all of them, just one
      setOwners(res)
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="jumbotron mt-3">
        { existingId && existingId !== 'undefined' ?
          <>
            <h3>Current account ID</h3>
            <input className="form-control mt-3" disabled value={existingId} />
            <div className="d-flex mt-3">
              <Link className="btn btn-primary fit-c" to="/demo/products">Manage Products</Link>
              <input className="btn btn-secondary ml-3" type="button" value="Cancel"
                     onClick={() => {
                       localStorage.removeItem("ownerId")
                       setExistingId(undefined)
                     }}
              />
            </div>
          </> :
          <>
            <h3>Existing account</h3>
            <label>Your Account UID:</label>
            <div className="form-inline">
              <input className="form-control"
                     onChange={(e) => { setOwnerId(e.target.value) }}
                     value={ownerId}
              />
              <input className="btn btn-primary ml-2" type="button"
                     value="Confirm"
                     onClick={() => {
                       identify(ownerId, owners, setExistingId)
                     }}
              />
            </div>
            <hr/>
            <h3>Create new SME account</h3>
            <div className="form-row">
              <div className="form-group col-4">
                <label>SME Name:</label>
                <input className="form-control"
                       onChange={(e) => { setTitle(e.target.value) }}
                       value={title}
                />
              </div>
              <div className="form-group col-4">
                <label>Contact Email:</label>
                <input className="form-control"
                       onChange={(e) => { setEmail(e.target.value) }}
                       value={email}
                />
              </div>
              <div className="form-group col-4">
                <label>Your Stripe Publishable Key:</label>
                <input className="form-control"
                       onChange={(e) => { setPaymentPk(e.target.value) }}
                       value={paymentPk}
                />
              </div>
            </div>
            <input className="btn btn-primary" type="button" value="Create" onClick={() => {
              registerOwner({
                title,
                paymentPk,
                email,
              }).then(res => {
                console.log(res)
                localStorage.setItem("ownerId", res._id)
                setExistingId(res._id)
              })
            }} />
          </>
        }
      </div>
    </div>
  )
}