import React, {useEffect, useState} from "react";
import {fetchAllOwners} from "../api/api";

const identify = (uid, owners) => {
  if (owners.map(o => o._id).some(id => id === uid)) {
    localStorage.setItem("ownerId", uid)
    console.log(`Identified as ${uid}`)
  } else {
    console.log(uid)
    console.log(owners)
  }
}

export const Owners = () => {
  const [ownerId, setOwnerId] = useState("")
  const [ownerTitle, setOwnerTitle] = useState("")
  const [ownerEmail, setOwnerEmail] = useState("")
  const [ownerPk, setOwnerPk] = useState("")
  const [owners, setOwners] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllOwners()
      setOwners(res)
    }
    fetchData()
  }, [])
  const existingUid = localStorage.getItem("ownerId")

  return (
    <div className="container">
      <div className="jumbotron">
        { existingUid ?
          <input className="form-control" disabled value={existingUid} /> :
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
                       identify(ownerId, owners)
                     }}
              />
            </div>
            <h3>Create New SME Account</h3>
            <div className="form-group">
              <label>SME Name:</label>
              <input className="form-control"
                     onChange={(e) => { setOwnerTitle(e.target.value) }}
                     value={ownerTitle}
              />
              <label>Contact Email:</label>
              <input className="form-control"
                     onChange={(e) => { setOwnerEmail(e.target.value) }}
                     value={ownerEmail}
              />
              <label>Your Stripe Publishable Key:</label>
              <input className="form-control"
                     onChange={(e) => { setOwnerPk(e.target.value) }}
                     value={ownerPk}
              />
              <input className="btn btn-primary" value="Submit" />
            </div>
          </>
        }
      </div>
    </div>
  )
}