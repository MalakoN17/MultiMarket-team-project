import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TestProduct from './TestProduct';
export default function Product() {
  const [products, setProducts] = useState([]);

  const getProductsStore = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/product/store/63a8082f5f8178fa27b0aa03`
    );
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    getProductsStore();
  }, []);

  return (
    <>
      {products.map((product, index) => {
        return <TestProduct product={product} />;
      })}
    </>
  );
}
