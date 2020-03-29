import axios from 'axios'

export const fetchAllOwners = () => axios.get("/api/owners").then(r => r.data)
export const fetchOwnerProducts = (ownerId) => axios.get(`/api/products?ownerId=${ownerId}`).then(r => r.data)
export const createProduct = (product) => axios.post(`/api/products`, product).then(r => r.data)