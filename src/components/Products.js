import React from 'react';
import Product from './Product';
import NewProduct from './NewProduct';
import ProductHeader from './ProductHeader';
import { IconSpinner } from './utils';

const Products = ({
  products,
  isFetching,
  handleUpdateProduct,
  handleDeleteProduct,
  handleCreateProduct,
  handleToggleForm,
  formIsVisible
}) => {
  let body = null;
  if (isFetching) {
    body = <IconSpinner className='row--fetching' />;
  } else {
    const headerProps = { handleToggleForm, formIsVisible };
    body = (
      <div className='content'>
        <ProductHeader {...headerProps} />
        <NewProduct handleCreate={handleCreateProduct} toggleForm={handleToggleForm} formIsVisible={formIsVisible} />
        {products.map((product, index) => {
          const { _id } = product;
          return <Product
            product={product}
            key={_id}
            odd={index % 2 === 0}
            handleUpdate={handleUpdateProduct(_id)}
            handleDelete={handleDeleteProduct(_id)}
          />
        })}
      </div>
    );
  }

  return (
    <div className='products'>
      <h3>Products</h3>
      <div className='body'>{body}</div>
    </div>
  )
}

export default Products;
