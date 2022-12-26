import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

function PayButton() {

  const {stores} = useSelector((state)=> state.cart)
  const [store, setStores] = useState([])
  useEffect(()=>{
    setStores(stores)
  },[])
  const handleCheckout = ()=>{
      const res = axios.post(`http://localhost:8000/api/stripe/create-checkout-session`, {
        store
      }).then((res) => {
        if (res.data.url) {
          console.log(res);
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
      console.log(res);
  }
  return (
    <>
    <button onClick={()=> handleCheckout()}>לתשלום</button>
    </>
  )
}

export default PayButton