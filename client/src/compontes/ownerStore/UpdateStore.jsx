import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStore, updateStore, updateStoreRdu } from '../../features/ownerStore/ownerStoreSlice';
import InputOwner from './InputOwner';
import UploadImage from './UploadImage';

export default function UpdateStore() {
  const { isLogin, isSuccuss, store } = useSelector(
    (state) => state.ownerStore
  );
  const [storeDetails, setStoreDetails] = useState({ bnNumber: '', name: '', description: '', lightlogo: '', darklogo: '', coverImage: '', phone: '', email: '', address: { city: '', street: '', building: '', apartment: '', logo: '' } });
  const dispatch = useDispatch();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      storeDetails.id = store._id
      dispatch(updateStore(storeDetails))
    } catch (error) { }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'city' || name === 'street' || name === 'building' || name === 'apartment') {

      setStoreDetails({ ...storeDetails, address: { ...storeDetails.address, [name]: value } })
    } else if (name === 'coverImage' || name === 'lightlogo' || name === 'darklogo') {
      const file = e.target.files[0]
      setStoreDetails({...storeDetails, [name]:file})
      // TransformFileData(file, name)
    }else{
      console.log('df');
      setStoreDetails({...storeDetails, [name]:value})
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

  useEffect(() => {

  }, []);
  useEffect(() => {
    const { bnNumber, name, description, lightlogo, darklogo, coverImage, phone, email, address, logo } = store;
    setStoreDetails({ bnNumber, name, description, lightlogo, darklogo, coverImage, phone, email, address, logo });
  }, [isSuccuss]);
  return (
    <div className="flex-col items-center justify-center p-12 ">
      <h1 className='text-center text-2xl mb-5'>עידכון מוצר</h1>
      <div className="flex items-center justify-center ">
        <div className="sm:w-3/4  bg-white p-10 rounded shadow-2xl">
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
              <div className='my-5'>
                <UploadImage
                  funChange={handleInput}
                  nameImage=""
                  name='lightlogo'
                  Image={store.coverImage.url}
                />
                <button type="button" className='mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-teal-500 bg-black duration-300 hover:shadow-form rounded-md mt-4 bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none'>
                  עדכון לוגו בהיר
                </button>
              </div>
              <div>
                <UploadImage
                  nameImage=""
                  funChange={handleInput}
                  name='coverImage'
                  Image={store.lightlogo.url}
                />
                <button type="button" className='mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-teal-500 bg-black duration-300 hover:shadow-form rounded-md mt-4 bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none' >
                  עדכון תמונת רקע
                </button>
              </div>
              <div>
                <UploadImage
                  nameImage=""
                  funChange={handleInput}
                  name='darklogo'
                  Image={store.darklogo.url}
                />
                <button type="button" className='mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-teal-500 bg-black duration-300 hover:shadow-form rounded-md mt-4 bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none' >
                  עדכון לוגו
                </button>
              </div>
            </div>
            <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-blue-700 bg-teal-500 duration-300 hover:shadow-form w-full rounded-md mt-4 bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              עידכון חנות
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
