import axios from 'axios'

export const fetchAllOwners = () => axios.get(`/api/owners`).then(r => r.data)
export const registerOwner = (owner) => axios.post(`/api/owners`, owner).then(r => r.data)
export const fetchOwner = (ownerId) => axios.get(`/api/owners/${ownerId}`).then(r => r.data)

export const fetchOwnerProducts = (ownerId) => axios.get(`/api/products?ownerId=${ownerId}`).then(r => r.data)
export const createProduct = (product) => axios.post(`/api/products`, product).then(r => r.data)
export const fetchProduct = (productId) => axios.get(`/api/products/${productId}`).then(r => r.data)

export const fetchProductCoupons = (productId) => axios.get(`/api/products/${productId}/coupons`).then(r => r.data)
