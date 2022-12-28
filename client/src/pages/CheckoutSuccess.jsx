import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios';
import PayButton from '../compontes/stripe/PayButton';
import { useSelector } from 'react-redux';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Cart from '../compontes/main/Cart';
import { useNavigate } from 'react-router';
import DesktopNav from '../compontes/navbar/DesktopNav';
import Footer from '../compontes/footer/Footer';
import { useEffect } from 'react';
import FooterMobile from '../compontes/footer/footerMobile';

export default function CheckoutSuccess() {

  const navigate = useNavigate()
  const { cart } = useSelector(state => state)
  const { stripe } = useSelector(state => state.cart)
  const { cartItems } = useSelector(state => state.cart)
  const address = useSelector(state => state)
  const { user } = useSelector(state => state)

  const submitOrder = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/order`, {
      number: uuidv4,
      userId: user.userId,
      status: '',
      firstName: user.firstName,
      address: address,
      email: user.email,
      phone: user.phone,
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
    <div>
    <DesktopNav/>
    <div className="flex bg-neutral-100 p-10 h-screen  font-semibold justify-center">
      <div className='flex flex-col-reverse md:flex-row  w-full md:w-2/4 justify-around'>
        <div className='bg-white flex flex-col items-center w-full py-10 px-10  rounded ml-10 shadow-2xl'>
          <TaskAltIcon className='mb-7 mt-10 text-teal-500' style={{height:'70px', width:'70px'}}/>
          <div className='flex flex-col justify-center items-center text-center border-b'>
            <h1 className='text-4xl mb-3'>תודה שהזמנת דרכנו!</h1>
            <h5 className='text-lg flex items-center mb-5'>המשלוח כבר בדרך אלייך</h5>
          </div>
          <hr />
          <div className='flex flex-col justify-center items-center mt-5'>
            <h5>מספר הזמנה:</h5>
            <button className='px-5 mt-7 text-white hover:bg-blue-700 bg-teal-500 rounded py-2' onClick={() => {navigate('/')}}>המשך לאתר</button>
          </div>
        </div>
        <div className='cart my-10 md:my-0 '>
          <Cart/>
        </div>
      </div>
    </div>
    <Footer/>
    <FooterMobile/>
    
    </div>
  );
}

