import { connect } from 'react-redux';
import Orders from '../components/Orders';
import {
  getOrders,
  getIsFetching,
  getFormIsVisible
} from '../selectors/orders';
import {
  updateOrder
} from '../actions/orders';

const mapStateToProps = ({ orders }) => {
  return {
    orders: getOrders(orders),
    isFetching: getIsFetching(orders),
    formIsVisible: getFormIsVisible(orders)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleUpdateOrder: (id) => {
      return (data) => dispatch(updateOrder(id, data));
    },
  }
}

const OrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);

export default OrdersContainer;
