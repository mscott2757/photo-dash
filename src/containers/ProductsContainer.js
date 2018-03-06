import { connect } from 'react-redux';
import Products from '../components/Products';
import {
  getProducts,
  getIsFetching,
  getFormIsVisible
} from '../selectors/products';
import {
  updateProduct,
  deleteProduct,
  createProduct,
  toggleFormVisibility
} from '../actions/products';

const mapStateToProps = ({ products }) => {
  return {
    products: getProducts(products),
    isFetching: getIsFetching(products),
    formIsVisible: getFormIsVisible(products)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateProduct: (id) => {
      return (data) => dispatch(updateProduct(id, data));
    },
    handleDeleteProduct: (id) => {
      return () => dispatch(deleteProduct(id));
    },
    handleCreateProduct: (data) => {
      dispatch(createProduct(data));
    },
    handleToggleForm: (e) => {
      e.preventDefault();
      dispatch(toggleFormVisibility());
    }
  };
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;

