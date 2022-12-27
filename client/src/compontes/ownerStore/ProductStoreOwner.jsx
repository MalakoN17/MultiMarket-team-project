import React from 'react'
import { useSelector } from 'react-redux'
import ProductCump from './ProductCump';

export default function ProductStoreOwner() {
    const {products} = useSelector(state=>state.ownerStore)
    console.log(products);
  return (
    <div className="flex justify-around h-screen">
    {products?.map((product)=>{
        return (
            <ProductCump product={product}/>
        )
    })}
</div>
)
}
