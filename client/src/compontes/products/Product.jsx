import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TestProduct from './TestProduct';
export default function Product() {
  const [products, setProducts] = useState([]);

  const getProductsStore = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/product/store/63a8ba6d70b0e1a406346db2`
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
