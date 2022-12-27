import React, { useState, useRef } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector, useDispatch } from 'react-redux';
import { addAddress, clearAddress } from '../../../features/address/address';

function DeliveryDetails() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const [address, setAddress] = useState({
    apartment: '',
    building: '',
    city: '',
    comment: '',
    postalCode: '',
    street: '',
  });
  const formRef = useRef(null);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const submit = (e)=>{
    e.preventDefault();
  }
  const handleForm = (e)=>{
    e.preventDefault()
    dispatch(addAddress(address))
  }
  const clearForm = (e) => {
    dispatch(clearAddress(address))
  };
  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full md:w-[95%] justify-center align-center bg-white border-b-2 p-2 md:p-14">
        <div className="flex justify-between">
          <div className="flex">
            <LocationOnIcon className="text-[#0899A5]" />
            <h1 className="font-semibold mb-5">פרטי משלוח</h1>
          </div>
          <KeyboardArrowDownIcon
            className="text-[#0899A5]"
            onClick={() => toggle()}
          />
        </div>
        {show ? (
          <div>
            <p>
              {address.building} {address.street} {address.city}
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="w-full md:w-w-3/4">
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleInputs}
                type="text"
                name="city"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_text"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                עיר
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleInputs}
                type="text"
                name="street"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                רחוב
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleInputs}
                type="number"
                name="apartment"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                דירה
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleInputs}
                type="text"
                name="building"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                בניין
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                onChange={handleInputs}
                type="number"
                name="postalCode"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                מיקוד
              </label>
            </div>
            <textarea
              placeholder="הערות"
              onChange={handleInputs}
              name="comment"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={''}
            />
            <div className="flex align-center flex-col md:flex-row">
              <button
              onClick={handleForm}
                type="submit"
                className="text-white bg-[#0899A5] hover:bg-[#0899A5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                שמור
              </button>
              <button onClick={clearForm} className="underline mr-8 mt-3 border-b-2" to="/">
                מחק כתובת זו
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default DeliveryDetails;
