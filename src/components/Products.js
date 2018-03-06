import React from 'react';
import Product from './Product';
import NewProduct from './NewProduct';

const Products = (
  {
    products,
    isFetching,
    handleUpdateProduct,
    handleDeleteProduct,
    handleCreateProduct,
    handleToggleForm,
    formIsVisible
  }
) => {
  let body = null;
  if (isFetching) {
    body = (
      <div className='content--fetching'>
        <i className="fa fa-circle-o-notch fa-spin"></i>
      </div>
    );
  } else {
    body = (
      <div className='content'>
        <div className='header'>
          <div className='product__section'>
            <p>Product</p>
          </div>
          <div className='product__section'>
            <p>Stock</p>
          </div>
          <div className='product__section section--top-right'>
            <p>Actions</p>
            <a href='/toggle-form' onClick={handleToggleForm}>{(formIsVisible ? '-' : '+')}</a>
          </div>
        </div>
        {formIsVisible && <NewProduct handleCreate={handleCreateProduct} toggleForm={handleToggleForm}/>}
        {products.map((product, index) => {
          return <Product
            product={product}
            key={product._id}
            handleUpdate={handleUpdateProduct(product._id)}
            handleDelete={handleDeleteProduct(product._id)}
            odd={index % 2 === 0}
          />
        })}
      </div>
    );
  }

  return (
    <div className='products'>
      <h3>Products</h3>
      <div className='body'>
        {body}
      </div>
    </div>
  )
}

export default Products;
