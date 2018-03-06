import {
  REQUEST_ORDERS,
  RECEIVE_ORDERS,
  REQUEST_UPDATE_ORDER,
  RECEIVE_UPDATE_ORDER,
  REQUEST_DELETE_ORDER,
  RECEIVE_DELETE_ORDER,
  REQUEST_CREATE_ORDER,
  RECEIVE_CREATE_ORDER
} from './../actions/orders';

const orders = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_ORDERS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_ORDERS:
      return {
        ...state,
        isFetching: false,
        items: action.orders
      }
    case REQUEST_UPDATE_ORDER:
      console.log(REQUEST_UPDATE_ORDER);
      return {
        ...state,
        items: state.items.map((order) => {
          if (order._id === action.id) {
            return { ...order, isFetching: true }
          }
          return order;
        })
      }
    case RECEIVE_UPDATE_ORDER:
      console.log(RECEIVE_UPDATE_ORDER);
      return {
        ...state,
        items: state.items.map((order) => {
          if (order._id === action.order._id) {
            return action.order
          }
          return order;
        })
      }
    case REQUEST_DELETE_ORDER:
      return {
        ...state,
        items: state.items.map((order) => {
          if (order._id === action.id) {
            return { ...order, isFetching: true }
          }
          return order;
        })
      }
    case RECEIVE_DELETE_ORDER:
      return {
        ...state,
        items: state.items.filter((order) => order._id !== action.id)
      }
    case REQUEST_CREATE_ORDER:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CREATE_ORDER:
      return {
        ...state,
        isFetching: false,
        items: [ action.order, ...state.items ]
      }
    default:
      return state;
  }
}

export default orders;
