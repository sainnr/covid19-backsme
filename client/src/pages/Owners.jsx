import React, {useEffect, useState} from "react";
import {fetchAllOwners, registerOwner} from "../api/api";

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
      <div className="jumbotron">
        { existingId && existingId !== 'undefined' ?
          <input className="form-control" disabled value={existingId} /> :
          <>
            <h3>Existing Account</h3>
            <div className="form-group">
              <label>Your Account UID:</label>
              <input className="form-control"
                     onChange={(e) => { setOwnerId(e.target.value) }}
                     value={ownerId}
              />
              <input className="btn btn-primary"
                     value="Confirm"
                     onClick={() => {
                       identify(ownerId, owners, setExistingId)
                     }}
              />
            </div>
            <h3>Create New SME Account</h3>
            <div className="form-group">
              <label>SME Name:</label>
              <input className="form-control"
                     onChange={(e) => { setTitle(e.target.value) }}
                     value={title}
              />
              <label>Contact Email:</label>
              <input className="form-control"
                     onChange={(e) => { setEmail(e.target.value) }}
                     value={email}
              />
              <label>Your Stripe Publishable Key:</label>
              <input className="form-control"
                     onChange={(e) => { setPaymentPk(e.target.value) }}
                     value={paymentPk}
              />
              <input className="btn btn-primary" value="Submit" onClick={() => {
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
            </div>
          </>
        }
      </div>
    </div>
  )
}