import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  clearCart,
  calculateTotals,
} from '../../features/cart/cartSlice';
import businessLiaisonLogo from '../../assets/images/businessLiaisonLogo.png';
import './cartStyle.css';
import CartItems from './CartItems';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const {user} = useSelector(state => state)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(calculateTotals());
    console.log(user);
  }, [cartItems]);
  const dispatch = useDispatch();

  return (
    <>
    {user ? (
<>
<div className="h-full flex-block md:flex-none">
        <div className="bg-gray-800 p-2 text-center">
          <h3 className="text-white">עגלת קניות</h3>
          <ToastContainer />
        </div>
        <div className="flex flex-col h-[95%]">
          {cartItems.map( product => {
            return (
              <>
                <div key={product.id}>
                  <div className="bg-gray-100 flex gap-1 p-1">
                    <div className="store-img-cart-container">
                      <img
                        className="store-img-cart"
                        src={businessLiaisonLogo}
                        alt=""
                      />
                    </div>
                    <p>{product.storeName}</p>
                  </div>
                  <div className="products-cart-container"></div>
                </div>
                <CartItems products={product.products} />
                <div className="flex justify-end">
                  <p className="store-sum">
                    סה"כ: {product.sum} ש"ח
                  </p>
                </div>
              </>
            );
          })}
          <div className="sum-container">
            <div className="p-3">
              <div className="flex justify-between">
                <p>סה"כ</p>
                <p><span>{total}</span> ש"ח</p>
              </div>
              <div className="flex justify-between">
                <p>בקניה זו חסכת</p>
                <p>0</p>
              </div>
              <div className="flex justify-between">
                <p>מספר מוצרים</p>
                <p>0</p>
              </div>
              <button onClick={() => dispatch(clearCart())}>נקה</button>
            </div>
            <button onClick={()=>{
              if(total === 0){
                toast.warning('העגלה שלך ריקה', {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }else{
                navigate('/checkout')
              }
            }}  className="pay-btn w-full">
              לתשלום <span>{total}</span> ש"ח
            </button>
          </div>
        </div>
      </div>
</>
    ) : (
      <>
      <div className="h-full flex-block md:flex-none">
        <div className="bg-gray-800 p-2 text-center">
          <h3 className="text-white">עגלת קניות</h3>
          <ToastContainer />
        </div>
        <div className="flex flex-col h-[95%]">
          {cartItems.map( product => {
            return (
              <>
                <div key={product.id}>
                  <div className="bg-gray-100 flex gap-1 p-1">
                    <div className="store-img-cart-container">
                      <img
                        className="store-img-cart"
                        src={businessLiaisonLogo}
                        alt=""
                      />
                    </div>
                    <p>{product.storeName}</p>
                  </div>
                  <div className="products-cart-container"></div>
                </div>
                <CartItems products={product.products} />
                <div className="flex justify-end">
                  <p className="store-sum">
                    סה"כ: {product.sum} ש"ח
                  </p>
                </div>
              </>
            );
          })}
          <div className="sum-container">
            <div className="p-3">
              <div className="flex justify-between">
                <p>סה"כ</p>
                <p>{total} ש"ח</p>
              </div>
              <div className="flex justify-between">
                <p>בקניה זו חסכת</p>
                <p>8 ש"ח</p>
              </div>
              <div className="flex justify-between">
                <p>מספר מוצרים</p>
                <p>{amount}</p>
              </div>
              <button onClick={() => dispatch(clearCart())}>נקה</button>
            </div>
            <button onClick={()=>{
              if(total === 0){
                toast.warning('העגלה שלך ריקה', {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }else{
                navigate('/checkout')
              }
            }}  className="pay-btn w-full">
              לתשלום <span>{total}</span> ש"ח
            </button>
          </div>
        </div>
      </div>
      </>
    ) }

    </>
  );
}
