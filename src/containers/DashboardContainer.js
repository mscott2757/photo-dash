import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import { fetchOrders } from '../actions/orders';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchProducts());
      dispatch(fetchOrders());
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
