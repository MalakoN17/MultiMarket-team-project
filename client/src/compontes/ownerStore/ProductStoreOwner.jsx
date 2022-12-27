import React from 'react';
import { useSelector } from 'react-redux';
import ProductCump from './ProductCump';

export default function ProductStoreOwner() {
  const { products } = useSelector((state) => state.ownerStore);
  return (
    <section className="max-w-6xl mx-auto  sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {products?.map((product) => {
          return <ProductCump product={product} />;
        })}
       
      </div>
    </section>
  );
}
