import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  RECEIVE_LOGIN_ERR,
  CLEAR_LOGIN_ERR
} from '../actions/login';

const login = (state = {
  isFetching: false,
  hasErrored: false,
  errMessage: ''
}, action) => {
  switch(action.type) {
    case REQUEST_LOGIN:
      return { ...state, isFetching: true }
    case RECEIVE_LOGIN:
      return { ...state, isFetching: false }
    case RECEIVE_LOGIN_ERR:
      return {
        ...state,
        isFetching: false,
        hasErred: true,
        errMessage: action.message
      }
    case CLEAR_LOGIN_ERR:
      return {
        ...state,
        hasErred: false,
        errMessage: ''
      }
    default:
      return state;
  }
}

export default login;
