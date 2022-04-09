/* eslint-disable no-undef */
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

const Product = () => {
  const params = useParams();

  const [productData, setProductData] = useState({});

  fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then((res) => res.json())
    .then((json) => setProductData(json));

  console.log(productData);

  return (
    <div className="App">
      <header className="App-header">
        {!productData.title && (
          <img src={logo} className="App-logo" alt="logo" />
        )}

        {productData && productData.title && (
          <div>
            <p>{productData.title}</p>
            <img src={productData.image} alt={productData.title} />
          </div>
        )}
      </header>
    </div>
  );
};

export default Product;
