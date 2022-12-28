import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, increase, decrease, removeItem, clearCart, calculateTotals } from '../../features/cart/cartSlice';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function CartItems({products}) {
  console.log(products);
    const dispatch = useDispatch();
  return (
    <>
    {products.map(item =>{
        return(
            <div
            className="flex items-center justify-between gap-3"
            key={item.id}
          >
            <img src={item.image} alt="" width="60px" />
            <div>
              <p className="product-name">
                {item.name}
              </p>
              {/* <p className="text-gray-400">{order.storeName}</p> */}
            </div>
            <div>
              <div className="flex gap-1">
                {/* <RemoveCircleOutlineIcon
                  onClick={() =>{
                    if(item.quantity === 1){
                      dispatch(removeItem(item))
                      return;
                    }
                    dispatch(removeItem(item))
                  }
                  }
                /> */}
                <p>כמות: {item.quantity} </p>
                {/* <ControlPointIcon
                  onClick={() =>
                    dispatch(addProduct(item))
                  }
                /> */}
              </div>
              <div>
                <p>{item.price} ש"ח</p>
              </div>
            </div>
          </div>
        )
    })}

    </>
  )
}

