import axios from 'axios';
import { API_ENDPOINT } from '../shared';
import { axiosConfig, errHandler } from './shared';
import { fetchProducts } from '../actions/products';
import { fetchOrders } from '../actions/orders';
import history from '../history';

export const REQUEST_USER_VALIDATION = 'REQUEST_USER_VALIDATION';
export function requestUserValidation() {
  return { type: REQUEST_USER_VALIDATION }
}

export const RECEIVE_USER_VALIDATION = 'RECEIVE_USER_VALIDATION';
export function receiveUserValidation() {
  return { type: RECEIVE_USER_VALIDATION }
}

export const RECEIVE_USER_VALIDATION_ERR = 'RECEIVE_USER_VALIDATION_ERR';
export function receiveUserValidationErr() {
  return { type: RECEIVE_USER_VALIDATION_ERR }
}

const fetchData = (dispatch) => {
  dispatch(fetchProducts());
  dispatch(fetchOrders());
}

export function validateUserDashboard(data) {
  return dispatch => {
    return axios(`${API_ENDPOINT}/validate`, {
      method: 'post',
      data,
      withCredentials: true
    })
      .then(
        (res) => {
          if (res.data.success) {
            dispatch(receiveUserValidation());
            fetchData(dispatch);
          } else {
            dispatch(receiveUserValidationErr());
            history.push('/login');
          }
        },
        errHandler
      );
  }
}

export function validateUserLogin(data) {
  return dispatch => {
    return axios.post(`${API_ENDPOINT}/validate`, data, axiosConfig)
      .then(
        (res) => {
          if (res.data.success) {
            dispatch(receiveUserValidation());
            history.push('/');
          } else {
            dispatch(receiveUserValidationErr());
          }
        },
        errHandler
      );
  }
}
