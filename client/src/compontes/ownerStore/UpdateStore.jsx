import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStore,updateStore,updateStoreRdu } from '../../features/ownerStore/ownerStoreSlice';
import InputOwner from './InputOwner';
import UploadImage from './UploadImage';

export default function UpdateStore() {
  const { isLogin, isSuccuss, store } = useSelector(
    (state) => state.ownerStore
  );
  const [storeDetails, setStoreDetails] = useState({bnNumber:'', name:'', description:'', lightlogo:'', darklogo:'', coverImage:'', phone:'', email:'', address:{city:'', street:'', building:'', apartment:'', logo:''}});
  const dispatch = useDispatch();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      storeDetails.id = '6390605ef3ee5834eff8fa0c'
      dispatch(updateStore(storeDetails))
    } catch (error) {}
  };
 
  const handleInput = (e) => {
    const { name, value } = e.target;
    if(name === 'city' || name === 'street' || name === 'building' || name === 'apartment'){

      setStoreDetails({...storeDetails, address:{...storeDetails.address,[name]:value}})
    }else if(name === 'coverImage' || name === 'lightlogo' || name === 'darklogo'){
      const file = e.target.files[0]
      TransformFileData(file, name)
    }
  };

  const TransformFileData = (file, name) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setStoreDetails({...storeDetails, [name]:reader.result});
      };
    } else {
      setStoreDetails({...storeDetails, [name]:storeDetails[name]});
    }
  };

  useEffect(() => {

  }, []);
  useEffect(() => {
    const {bnNumber, name, description, lightlogo, darklogo, coverImage, phone, email, address, logo} = store;
    setStoreDetails({bnNumber, name, description, lightlogo, darklogo, coverImage, phone, email, address, logo});
  }, [isSuccuss]);
  return (
    <div className="">
      <h1 className='text-center text-2xl mb-5'>עידכון מוצר</h1>
      <div className="flex items-center justify-center ">
        <div className="mx-auto w-full max-w-[550px] bg-white px-10 rounded">
          <form onSubmit={handleForm} className="py-6 px-2">
            <div className="mb-5">
            <InputOwner
            description="שם החנות"
            funChange={handleInput}
            type="name"
            name="name"
            value={store.name}
          />
            </div>

            <div className="mb-5">
            <InputOwner
            funChange={handleInput}
            description="bnNumber"
            type="text"
            name="bnNumber"
            value={store.bnNumber}
          />
            </div>

            <div className="mb-5">
            <InputOwner
            funChange={handleInput}
            description="טלפון"
            type="tel"
            name="phone"
            value={store.phone}
          />
            </div>

            <div className="mb-5">
            <InputOwner
            funChange={handleInput}
            description="איימל"
            type="email"
            name="email"
            value={store.email}
          />
            </div>

            <div>
            <InputOwner
            funChange={handleInput}
            description="עיר"
            type="text"
            name="city"
            value={store.address?.city}
          />
            </div>

            <div className="mb-5">
            <InputOwner
            funChange={handleInput}
            description="רחוב"
            type="text"
            name="street"
            value={store.address?.street}
          />
            </div>

            <div className="mb-5">
            <InputOwner
            funChange={handleInput}
            description="בניין"
            type="text"
            name="building"
            value={store.address?.building}
          />
            </div>

            <div className="mb-5">
            <InputOwner
            funChange={handleInput}
            description="דירה"
            type="text"
            name="apartment"
            value={store.address?.apartment}
          />
            </div>
            <div>
            </div>
            <div className="  justify-around ">
          <div>
            <UploadImage
            funChange={handleInput}
              nameImage="lightlogo"
              name='lightlogo'
              Image={store.coverImage.url}
            />
            <button type="button" >
              update light logo
            </button>
          </div>
          <div>
            <UploadImage
              nameImage="coverImage"
              funChange={handleInput}
              name='coverImage'
              Image={store.lightlogo.url}
            />
            <button type="button" >
              update cover Image
            </button>
          </div>
          <div>
            <UploadImage
              nameImage="dark logo"
              funChange={handleInput}
              name='darklogo'
              Image={store.darklogo.url}
            />
            <button type="button" >
              update dark logo
            </button>
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
