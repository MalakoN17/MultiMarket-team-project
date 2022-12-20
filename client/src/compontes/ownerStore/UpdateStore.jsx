import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStores } from '../../features/ownerStore/ownerStoreSlice';
import axiosMu from '../../utils/axiosInterceptors';
import InputOwner from './InputOwner';
import UploadImage from './UploadImage';

export default function UpdateStore() {
  const { isLogin, isSuccuss, store } = useSelector(
    (state) => state.ownerStore
  );
  const [storeDetails, setStoreDetails] = useState({});
  const [updateStoreDetails, setUpdateStoreDetails] = useState({});
  const dispatch = useDispatch();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosMu.put(`/store/`, store);
    } catch (error) {}
  };
  const handleShowUploadCoverImage = ()=>{
    
  }
  const handleShowUploadDarklogo = ()=>{
    
  }
  const handleShowUploadLightlogo = ()=>{
   
  }
  
  const handleInput =(e)=>{
    const {name, value} = e.target
    
  } 
  useEffect(() => {
    dispatch(getStores('6391e77a46a83544c853314f'));
  }, []);
  useEffect(() => {
    setStoreDetails(store);
  }, [isSuccuss]);
  return (
    <div className=''>
      <form onChange={handleForm} >
        <div className="flex flex-col ">
             <InputOwner description='שם החנות' funChange={handleInput} type='name' name='name' value={storeDetails.name}/>
             <InputOwner funChange={handleInput} description='bnNumber' type='text' name='bnNumber' value={storeDetails.bnNumber}/>
             <InputOwner funChange={handleInput} description='טלפון' type='tel' name='phone' value={storeDetails.phone}/>
             <InputOwner funChange={handleInput} description='איימל' type='email' name='email' value={storeDetails.email}/>
             <InputOwner funChange={handleInput} description='עיר' type='text' name='city' value={storeDetails.address?.city}/>
             <InputOwner funChange={handleInput} description='רחוב' type='text' name='street' value={storeDetails.address?.street}/>
             <InputOwner funChange={handleInput} description='בניין' type='text' name='building' value={storeDetails.address?.building}/>
             <InputOwner funChange={handleInput} description='דירה' type='text' name='apartment' value={storeDetails.address?.apartment}/>
        </div>
        <div className=' md:flex justify-around '>
            <div className=''>
            <UploadImage nameImage='cover Image' handleShow={handleShowUploadCoverImage} Image={storeDetails.logo}/>
            <button type='button' onClick={handleShowUploadCoverImage}>update cover image</button>
            </div>
            <div>
            <UploadImage nameImage='cover Image'  handleShow={handleShowUploadDarklogo} Image={storeDetails.logo}/>
            <button type='button' onClick={handleShowUploadDarklogo}>update dark logo</button>
            </div>
            <div>
            <UploadImage nameImage='cover Image'  handleShow={handleShowUploadLightlogo} Image={storeDetails.logo}/>
            <button type='button' onClick={handleShowUploadLightlogo}>update Light logo</button>
            </div>
        </div>
        <button type='submit'>update store</button>
      </form>
    </div>
  );
}
