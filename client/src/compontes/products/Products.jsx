import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../products/Product';
export default function Products() {
  const [products, setProducts] = useState([]);

  const getProductsStore = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/product/store/63a8a7a96f0e23bb79c39a20`
    );
    setProducts(res.data);
  };

  useEffect(() => {
    getProductsStore();
  }, []);

  return (
    <>
      {products.map((product, index) => {
        return <Product product={product} />;
      })}
    </>
  );
}
