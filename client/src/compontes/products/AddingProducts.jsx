import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Outlet} from 'react-router-dom'

export default function AddingProducts() {
    const [product, setProduct] = useState({ contactInfo:{contactNumber:'', contactName:''},expirationDate:'', manufacturer:'', parallelImporter:false,})
    const [productImg, setProductImg] = useState('')

    const handleProductImageUpload = (e) => {
      const file = e.target.files[0];
      TransformFileData(file);
    };
  
    const TransformFileData = (file) => {
      const reader = new FileReader();
  
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setProduct({...product, image:reader.result});
        };
      } else {
        setProduct({...product, image:''});
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`http://localhost:5000/api/product`, {
          image: productImg,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <div>
      <h1 className='text-7xl'>add product</h1>
      <Outlet/>
    </div>
  )
}
