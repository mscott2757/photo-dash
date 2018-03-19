import axios from 'axios';
import { API_ENDPOINT } from '../shared';
import { errHandler, axiosConfig } from './shared';
import { setUser } from '../cookies';
import history from '../history';

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

export function login({ data }) {
  return dispatch => {
    dispatch(requestLogin());
    return axios.post(`${API_ENDPOINT}/login`, data, axiosConfig)
      .then(
        (res) => {
          if (res.data.success) {
            dispatch(receiveLogin());
            setUser(res.data);
            history.push('/');
          } else {
            dispatch(receiveLoginErr(res.data));
          }
        },
        errHandler
      );
  }
}

