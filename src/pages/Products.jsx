import './css/products.css';
import { ProductCard } from '../components';

import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const API = `${process.env.REACT_APP_API_URL}/products/active-products`;
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(result => result.json())
      .then(data => {
        setProducts(
          data.map(product => {
            return (
                <ProductCard 
                  key={product._id} productProp={product} 
                />
              )      
          })
        );
      });
  }, []);

  return (
    <>
    <h1 className="pt-5 ps-5 catalogue">Product Catalogue <span className="number__of_products">({products.length} products)</span></h1>
    <p className="ps-5 pb-5 pt-2">Explore the guitars you might like</p>
    <div className="container">
      {products}
    </div>
    </>
  );
};

export default Products;