import {
  REQUEST_USER_VALIDATION,
  RECEIVE_USER_VALIDATION,
  RECEIVE_USER_VALIDATION_ERR
} from '../actions/validation';

const validation = (state = {
  isFetching: false,
  isLoggedIn: false
}, action) => {
  switch (action.type) {
    case REQUEST_USER_VALIDATION:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_USER_VALIDATION:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true
      }
    case RECEIVE_USER_VALIDATION_ERR:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export default validation;
