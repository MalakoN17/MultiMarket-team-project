import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputOwner from '../ownerStore/InputOwner';
import UploadImage from '../ownerStore/UploadImage';
import {getDepartments, createStore} from '../../features/ownerStore/ownerStoreSlice'
import axiosMu from '../../utils/axiosInterceptors';
import axios from 'axios';

export default function AddStore() {
  const state = useSelector(state=>state.ownerStore)
  const dispatch = useDispatch()
  const [departmentIds,setDepartmentIds] = useState([])
  const [storeDetails, setStoreDetails] = useState({
    bnNumber: '',
    name: '',
    description: '',
    lightlogo: '',
    darklogo: '',
    coverImage: '',
    phone: '',
    email: '',
    address: {
      city: '',
      street: '',
      building: '',
      apartment: '',
    },
      departmentIds: [],
      createdBy:'test-destaw'
  });

  const handleForm = async (e) => {
    e.preventDefault();
    dispatch(createStore(storeDetails))
  };
  const handleInput = async (e) => {
    const { name, value } = e.target;
    if (
      name === 'city' ||
      name === 'street' ||
      name === 'building' ||
      name === 'apartment'
    ) {
      setStoreDetails({
        ...storeDetails,
        address: { ...storeDetails.address, [name]: value },
      });
    } else if (
      name === 'coverImage' ||
      name === 'lightlogo' ||
      name === 'darklogo'
    ) {
      const file = e.target.files[0];
      TransformFileData(file, name);
    } else {
      setStoreDetails({ ...storeDetails, [name]: value });
    }
  };

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    if(checked === false){
      setStoreDetails({...storeDetails, departmentIds:storeDetails.departmentIds.filter(dap=> dap!== value)})
    }else{
      setStoreDetails({ ...storeDetails, departmentIds:[...storeDetails.departmentIds, value] })
    }
  };
  const TransformFileData = (file, name) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setStoreDetails({ ...storeDetails, [name]: reader.result });
      };
    } else {
      setStoreDetails({ ...storeDetails, [name]: storeDetails[name] });
    }
  };
  
  useEffect(()=>{
    dispatch(getDepartments())
    
    
  },[])
  useEffect(()=>{
    setDepartmentIds(state.departmentIds)
    
  },[state.departmentIds])
  return (
    <div className="">
      <h1 className="text-center text-lg">הוספת חנות</h1>
      <div className="flex items-center justify-center ">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleForm} className="py-6 px-2">
              <InputOwner
                description="שם החנות"
                funChange={handleInput}
                type="name"
                name="name"
                placeholder='הכנס את שם החנות'
              />
              <InputOwner
                funChange={handleInput}
                description="bnNumber"
                type="text"
                name="bnNumber"
                placeholder="Bn Number"
              />

              <InputOwner
                funChange={handleInput}
                description="טלפון"
                type="tel"
                name="phone"
                placeholder="מס טלפון "
              />
              <InputOwner
                funChange={handleInput}
                description="איימל"
                type="email"
                name="email"
                placeholder="הכנס איימל"
              />
                <div>
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-[#07074D] text-right"
              >
                {' '}
                תיאור מוצר:
              </label>
              <textarea
                placeholder="הכנס תיאור מוצר"
                onChange={handleInput}
                name="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={''}
              />
            </div>
              <InputOwner
                funChange={handleInput}
                description="עיר"
                type="text"
                name="city"
                placeholder=" הכנס עיר"
              />
              <InputOwner
                funChange={handleInput}
                description="רחוב"
                type="text"
                name="street"
                placeholder="הכנס רחוב העסק"
              />
              <InputOwner
                funChange={handleInput}
                description="בניין"
                type="text"
                name="building"
                placeholder="הכנס בניין עסק"
              />
              <InputOwner
                funChange={handleInput}
                description="דירה"
                type="text"
                name="apartment"
                placeholder="הכנס דירה עסק"
              />
            <div>
               <div className="flex items-center">
               {departmentIds?.map(item=>{ return (<> <input onChange={handleChange} type="checkbox" name="departmentIds" value={item._id}  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> 
               <label
               htmlFor="checked-checkbox"
               className="ml-2 mx-2 text-sm font-medium text-gray-900 dark:text-gray-500"
             >
               {item.name}
             </label>
             </>
             )}
               )}
             
              </div>
            </div>
            <div className=" ">
              <div>
                <UploadImage
                  funChange={handleInput}
                  nameImage="cover Image"
                  name="coverImage"
                  Image={storeDetails.coverImage}
                />
                
              </div>
              <div>
                <UploadImage
                  nameImage="light logo"
                  funChange={handleInput}
                  name="lightlogo"
                  Image={storeDetails.lightlogo}
                />
                
              </div>
              <div>
                <UploadImage
                  nameImage="dark logo"
                  funChange={handleInput}
                  name="darklogo"
                  Image={storeDetails.darklogo}
                />
              </div>
            </div>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:shadow-form w-full rounded-md mt-4 bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              עידכון חנות
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
