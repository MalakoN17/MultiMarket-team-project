import { useState } from 'react';
import InputOwner from '../ownerStore/InputOwner';
import UploadImage from '../ownerStore/UploadImage';

export default function AddStore() {
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
      logo: '',
    },
      departmentIds: [],
  });

  const handleForm = async (e) => {};
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
    }else if(name === 'departmentIds'){
        setStoreDetails({ ...storeDetails, departmentIds:[...storeDetails.departmentIds, value] })
    }
     else {
      setStoreDetails({ ...storeDetails, [name]: value });
    }
  };

  const TransformFileData = (file, name) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(name);
        console.log(reader.result);
        setStoreDetails({ ...storeDetails, [name]: reader.result });
      };
    } else {
      setStoreDetails({ ...storeDetails, [name]: storeDetails[name] });
    }
  };
  return (
    <div className="">
      <h1 className="text-center text-lg">הוספת חנות</h1>
      <div className="flex items-center justify-center ">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleForm} className="py-6 px-2">
            <div className="mb-5">
              <InputOwner
                description="שם החנות"
                funChange={handleInput}
                type="name"
                name="name"
              />
            </div>

            <div className="mb-5">
              <InputOwner
                funChange={handleInput}
                description="bnNumber"
                type="text"
                name="bnNumber"
              />
            </div>

            <div className="mb-5">
              <InputOwner
                funChange={handleInput}
                description="טלפון"
                type="tel"
                name="phone"
              />
            </div>

            <div className="mb-5">
              <InputOwner
                funChange={handleInput}
                description="איימל"
                type="email"
                name="email"
              />
            </div>

            <div>
              <InputOwner
                funChange={handleInput}
                description="עיר"
                type="text"
                name="city"
              />
            </div>

            <div className="mb-5">
              <InputOwner
                funChange={handleInput}
                description="רחוב"
                type="text"
                name="street"
              />
            </div>

            <div className="mb-5">
              <InputOwner
                funChange={handleInput}
                description="בניין"
                type="text"
                name="building"
              />
            </div>

            <div className="mb-5">
              <InputOwner
                funChange={handleInput}
                description="דירה"
                type="text"
                name="apartment"
              />
            </div>
            <div>
              <select>
                <option defaultValue={'departmentIds'}>departmentIds</option>
                {}
              </select>
            </div>
            <div className="  justify-around ">
              <div>
                <UploadImage
                  funChange={handleInput}
                  nameImage="lightlogo"
                  name="lightlogo"
                  Image={storeDetails.coverImage}
                />
                
              </div>
              <div>
                <UploadImage
                  nameImage="coverImage"
                  funChange={handleInput}
                  name="coverImage"
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
