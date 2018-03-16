import axios from 'axios';
import { API_ENDPOINT } from '../shared';
import { axiosConfig } from './shared';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export function requestLogin() {
  return { type: REQUEST_LOGIN }
}

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export function receiveLogin() {
  return { type: RECEIVE_LOGIN }
}

export const RECEIVE_LOGIN_ERR = 'RECEIVE_LOGIN_ERR';
export function receiveLoginErr({ message }) {
  return {
    type: RECEIVE_LOGIN_ERR,
    message
  }
}

export const CLEAR_LOGIN_ERR = 'CLEAR_LOGIN_ERR';
export function clearLoginErr() {
  return { type: CLEAR_LOGIN_ERR }
}

export function login(data) {
  return dispatch => {
    dispatch(requestLogin());
    return axios.post(`${API_ENDPOINT}/login`, data, axiosConfig)
      .then(
        (res) => {
          dispatch(receiveLogin());
        },
        (err) => {
          dispatch(receiveLoginErr(err.response.data));
        }
      )
  }
}
