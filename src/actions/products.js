import axios from 'axios';
import { API_ENDPOINT } from '../shared';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  }
}

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json.map((product) => {
      return {
        ...product,
        isFetching: false
      }
    })
  }
}

export function fetchProducts() {
  return function (dispatch) {
    dispatch(requestProducts());
    return axios.get(`${API_ENDPOINT}/products`).then(
      res => res.data,
      err => {
        console.log(err)
      }
    ).then(json =>
      dispatch(receiveProducts(json))
    );
  }
}

export const REQUEST_UPDATE_PRODUCT = 'REQUEST_UPDATE_PRODUCT';
export function requestUpdateProduct(id) {
  return {
    type: REQUEST_UPDATE_PRODUCT,
    id
  }
}

export const RECEIVE_UPDATE_PRODUCT = 'RECEIVE_UPDATE_PRODUCT';
export function receiveUpdateProduct(json) {
  return {
    type: RECEIVE_UPDATE_PRODUCT,
    product: { ...json, isFetching: false }
  }
}

export function updateProduct(id, data) {
  return function (dispatch) {
    dispatch(requestUpdateProduct(id));
    return axios.put(`${API_ENDPOINT}/products/${id}`, data).then(
      res => res.data,
      err => {
        console.log(err)
      }
    ).then(json =>
      dispatch(receiveUpdateProduct(json))
    );
  }
}

export const REQUEST_DELETE_PRODUCT = 'REQUEST_DELETE_PRODUCT';
export function requestDeleteProduct(id) {
  return {
    type: REQUEST_DELETE_PRODUCT,
    id
  }
}

export const RECEIVE_DELETE_PRODUCT = 'RECEIVE_DELETE_PRODUCT';
export function receiveDeleteProduct(id) {
  return {
    type: RECEIVE_DELETE_PRODUCT,
    id
  }
}

export function deleteProduct(id) {
  return function (dispatch) {
    dispatch(requestDeleteProduct(id));
    return axios.delete(`${API_ENDPOINT}/products/${id}`).then(
      res => res.data,
      err => {
        console.log(err)
      }
    ).then((json) => {
      dispatch(receiveDeleteProduct(id));
    });
  }
}

export const REQUEST_CREATE_PRODUCT = 'REQUEST_CREATE_PRODUCT';
export function requestCreateProduct() {
  return {
    type: REQUEST_CREATE_PRODUCT
  }
}

export const RECEIVE_CREATE_PRODUCT = 'RECEIVE_CREATE_PRODUCT';
export function receiveCreateProduct(json) {
  return {
    type: RECEIVE_CREATE_PRODUCT,
    product: {
      ...json,
      isFetching: false
    }
  }
}

export function createProduct(data) {
  return function (dispatch) {
    dispatch(requestCreateProduct());
    return axios.post(`${API_ENDPOINT}/products`, data).then(
      res => res.data,
      err => {
        console.log(err)
      }
    ).then((json) => {
      dispatch(receiveCreateProduct(json));
      dispatch(toggleFormVisibility());
    });
  }
}

export const TOGGLE_FORM_VISIBILITY = 'TOGGLE_FORM_VISIBILITY';
export function toggleFormVisibility() {
  return {
    type: TOGGLE_FORM_VISIBILITY
  }
}
