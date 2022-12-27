import React from 'react';
import { useSelector } from 'react-redux';
import ProductCump from './ProductCump';

export default function ProductStoreOwner() {
  const { products } = useSelector((state) => state.ownerStore);
  return (

    <div className="flex flex-wrap justify-around p-10">
    {products?.map((product)=>{
        return (
            <ProductCump product={product}/>
        )
    })}
</div>
)
}
