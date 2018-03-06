import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  REQUEST_UPDATE_PRODUCT,
  RECEIVE_UPDATE_PRODUCT,
  REQUEST_DELETE_PRODUCT,
  RECEIVE_DELETE_PRODUCT,
  REQUEST_CREATE_PRODUCT,
  RECEIVE_CREATE_PRODUCT,
  TOGGLE_FORM_VISIBILITY
} from '../actions/products';

const products = (state = {
  isFetching: false,
  items: [],
  formIsVisible: false
}, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        items: action.products
      }
    case REQUEST_UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map((product) => {
          if (product._id === action.id) {
            return { ...product, isFetching: true }
          }
          return product;
        })
      }
    case RECEIVE_UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map((product) => {
          if (product._id === action.product._id) {
            return action.product;
          }
          return product;
        })
      }
    case REQUEST_DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.map((product) => {
          if (product._id === action.id) {
            return { ...product, isFetching: true }
          }
          return product;
        })
      }
    case RECEIVE_DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((product) => product._id !== action.id)
      }
    case REQUEST_CREATE_PRODUCT:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CREATE_PRODUCT:
      return {
        ...state,
        isFetching: false,
        items: [ ...state.items, action.product ]
      }
    case TOGGLE_FORM_VISIBILITY:
      return {
        ...state,
        formIsVisible: !state.formIsVisible
      }
    default:
      return state;
  }
}

export default products;

