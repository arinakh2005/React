import React from 'react';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useStore } from '../hooks-store/store';

const Products = (props) => {
  const state = useStore()[0];

  return (
    <ul className="products-list">
      {state.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          isFav={product.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
