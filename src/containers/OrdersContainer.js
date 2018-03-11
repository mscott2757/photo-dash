import { connect } from 'react-redux';
import Orders from '../components/Orders';
import {
  getOrders,
  getIsFetching,
  getFormIsVisible
} from '../selectors/orders';
import {
  updateOrder,
  createOrder,
  deleteOrder,
  toggleNewOrder
} from '../actions/orders';

const mapStateToProps = ({ orders, products }) => {
  return {
    orders: getOrders(orders),
    isFetching: getIsFetching(orders),
    formIsVisible: getFormIsVisible(orders),
    products: products.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleUpdateOrder: (id) => {
      return (data) => {
        dispatch(updateOrder(id, data));
      }
    },
    handleCreateOrder: (data) => {
      dispatch(createOrder(data))
    },
    handleToggleForm: (e) => {
      e.preventDefault();
      dispatch(toggleNewOrder());
    },
    handleDeleteOrder: (id) => {
      return () => {
        dispatch(deleteOrder(id));
      }
    }
  }
}

const OrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);

export default OrdersContainer;
