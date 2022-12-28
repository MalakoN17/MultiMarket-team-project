import React, {useState} from 'react';
import {v4 as uuidv4 } from 'uuid'
import axios from 'axios';
import PayButton from '../compontes/stripe/PayButton';
import { useSelector } from 'react-redux';
function CheckoutSuccess() {
  const {cart} = useSelector(state => state)
  const {stripe} = useSelector(state => state.cart)
  const {cartItems} = useSelector(state => state.cart)
  const address = useSelector(state => state)
  const {user} = useSelector(state => state)

  const submitOrder = async ()=>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/order`,{
      number: uuidv4,
      userId: user.userId,
      status:'',
      firstName: user.firstName,
      address: address,
      email: user.email,
      phone:user.phone,
      sum: cart.total,
      finalSum: cart.total,
      delivery: address.delivery,
      products: cartItems,
      storeId: cartItems[0].storeId,
      createdBy: user.firstName
    })
    console.log(data);
  }
  return (
    <>
      <PayButton />
      <div className="container text-center bg-gray-400 flex flex-col items-center justify-center">
        <div>
          <h1>תודה שהזמנת דרכנו</h1>
          <h5>המשלוח בדרך אלייך</h5>
          <hr />
          <h5>מספר הזמנה:</h5>
          <button onClick={submitOrder}>לחץ כאן לסיום רכישה</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutSuccess;
