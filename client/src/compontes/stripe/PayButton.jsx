import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

function PayButton() {

  const {stripe} = useSelector((state)=> state.cart)
  // const products = cartItems.map(product => product.products)
  useEffect(()=>{
    console.log(stripe);
  },[])
  const handleCheckout = ()=>{
      const res = axios.post(`http://localhost:8000/api/stripe/create-checkout-session`, {
        stripe
      }).then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
      console.log(res);
  }
  return (
    <>
    <button className='p-3 border-solid rounded-md border-2 border-[#0899A5] text-[#0899A5] hover:bg-[#0899A5] hover:text-white' onClick={()=> handleCheckout()}>לתשלום</button>
    </>
  )
}

export default PayButton