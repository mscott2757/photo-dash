import axios from 'axios';
import { API_ENDPOINT } from '../shared';
import { updateProduct } from './products';
import { resHandler, errHandler } from './shared';

export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export function requestOrders() {
  return { type: REQUEST_ORDERS }
}

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export function receiveOrders(json) {
  return {
    type: RECEIVE_ORDERS,
    orders: json.map((order) => {
      return { ...order, isFetching: false }
    })
  }
}

export function fetchOrders() {
  return (dispatch) => {
    dispatch(requestOrders());
    return axios.get(`${API_ENDPOINT}/orders`)
    .then(resHandler, errHandler)
    .then(json => {
      dispatch(receiveOrders(json))
    });
  }
}

export const REQUEST_UPDATE_ORDER = 'REQUEST_UPDATE_ORDER';
export function requestUpdateOrder(id) {
  return { type: REQUEST_UPDATE_ORDER, id }
}

export const RECEIVE_UPDATE_ORDER = 'RECEIVE_UPDATE_ORDER';
export function receiveUpdateOrder(json) {
  return {
    type: RECEIVE_UPDATE_ORDER,
    order: { ...json, isFetching: false }
  }
}

export function updateOrder(id, data) {
  return (dispatch) => {
    dispatch(requestUpdateOrder(id));
    return axios.put(`${API_ENDPOINT}/orders/${id}`, data)
    .then(resHandler, errHandler)
    .then(json => {
      dispatch(receiveUpdateOrder(json));
    });
  }
}

export const REQUEST_DELETE_ORDER = 'REQUEST_DELETE_ORDER';
export function requestDeleteOrder(id) {
  return { type: REQUEST_DELETE_ORDER, id }
}

export const RECEIVE_DELETE_ORDER = 'RECEIVE_DELETE_ORDER';
export function receiveDeleteOrder(id) {
  return { type: RECEIVE_DELETE_ORDER, id }
}

export function deleteOrder(id) {
  return dispatch => {
    dispatch(requestDeleteOrder(id));
    return axios.delete(`${API_ENDPOINT}/orders/${id}`)
    .then(resHandler, errHandler)
    .then(json => {
      dispatch(receiveDeleteOrder(id));
    });
  }
}

export const REQUEST_CREATE_ORDER = 'REQUEST_CREATE_ORDER';
export function requestCreateOrder() {
  return { type: REQUEST_CREATE_ORDER }
}

export const RECEIVE_CREATE_ORDER = 'RECEIVE_CREATE_ORDER';
export function receiveCreateOrder(json) {
  return {
    type: RECEIVE_CREATE_ORDER,
    order: { ...json, isFetching: false }
  }
}

export function createOrder(data) {
  let { product } = data;
  return dispatch => {
    dispatch(requestCreateOrder());
    return axios.post(`${API_ENDPOINT}/orders`, data)
    .then(resHandler, errHandler)
    .then((json) => {
      dispatch(receiveCreateOrder(json));
      updateProduct(product);
    });
  }
}


export const TOGGLE_NEW_ORDER = 'TOGGLE_NEW_ORDER';
export function toggleNewOrder() {
  return { type: TOGGLE_NEW_ORDER }
}

