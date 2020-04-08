import React, {useEffect, useState} from "react";
import {fetchOwner, registerOwner} from "../api/api";
import {Link} from "react-router-dom";

const identify = (uid, setFn, errFn) =>
  fetchOwner(uid).then(res => {
    localStorage.setItem("ownerId", uid)
    setFn(res)
    console.info(`Identified as ${uid}`)
  }).catch(e => {
    errFn(`Can't find account "${uid}"`)
    console.error(e)
  })

export const Owners = () => {
  const [existingId, setExistingId] = useState(localStorage.getItem("ownerId"))
  const [ownerId, setOwnerId] = useState("")
  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")
  const [paymentPk, setPaymentPk] = useState("")
  const [error, setError] = useState("")
  const [ownerDetails, setOwnerDetails] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchOwner(existingId)
      setOwnerDetails(res)
    }
    if (existingId) {
      fetchData()
    }
  }, [existingId])

  return (
    <div className="container">
      <div className="jumbotron mt-3">
        { existingId && existingId !== 'undefined' && ownerDetails ?
          <>
            <h3>Your account details</h3>
            <p>{ ownerDetails.title }</p>
            <p>Unique ID: { ownerDetails._id }</p>
            <p>Stripe Public Key: { ownerDetails.paymentPk }</p>
            <div className="d-flex mt-3">
              <Link className="btn btn-primary fit-c" to="/demo/products">Manage Products</Link>
              <input className="btn btn-secondary ml-3" type="button" value="Exit"
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
                     placeholder="Your existing Account ID"
              />
              <input className="btn btn-primary ml-2" type="button"
                     value="Confirm"
                     onClick={() => identify(ownerId, setExistingId, setError)}
              />
            </div>
            { error && <div className="alert alert-danger mt-2">{ error }</div> }
            <hr/>
            <h3>Create new SME account</h3>
            <div className="form-row">
              <div className="form-group col-4">
                <label>SME Name:</label>
                <input className="form-control"
                       onChange={(e) => { setTitle(e.target.value) }}
                       value={title}
                       placeholder="Your display name for the customers"
                />
              </div>
              <div className="form-group col-4">
                <label>Contact Email:</label>
                <input className="form-control"
                       onChange={(e) => { setEmail(e.target.value) }}
                       value={email}
                       placeholder="A working contact email"
                />
              </div>
              <div className="form-group col-4">
                <label>Your Stripe Publishable Key:</label>
                <input className="form-control"
                       onChange={(e) => { setPaymentPk(e.target.value) }}
                       value={paymentPk}
                       placeholder="Your public Stripe key for checkouts"
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