import React from 'react';
import { useSelector } from 'react-redux';
import ProductCump from './ProductCump';

export default function ProductStoreOwner() {
  const { products } = useSelector((state) => state.ownerStore);
  return (

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
    {products?.map((product)=>{
        return (
            <ProductCump product={product}/>
        )
    })}
</div>
)
}
