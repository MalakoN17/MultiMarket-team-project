import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function PopOut() {
  // const {cityValue} = useSelector((state)=> state.city);
  // const dispatch = useDispatch();
  const {city,setCity} = useState("תל אביב")
  const [show, setShow] = useState(true);

  const handleCitySelect = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };
  return (
    
    <div className={show ? 'block' : 'hidden'}>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <button onClick={()=>setShow(!show)}>
                        <CloseIcon  />
                    </button>
                  </div>
                  <div className="mt-3 mx-10 text-center items-center sm:mt-0 sm:ml-4 sm:text-center">
                    <LocationOnIcon />
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      אנא ידע אותנו לגבי מיקומך
                    </h3>
                    <div className="mt-2">
                      <select
                      onChange={(e)=>handleCitySelect(e)}
                        value={city}
                        name="cities"
                        id="cities"
                      >
                        <option value="ירושלים">ירושלים </option>
                        <option value="תל אביב">תל אביב</option>
                        <option value="חיפה">חיפה</option>
                        <option value="נתניה">נתניה</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 items-center">
                <button
                  type="button"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  התחל קנייה
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
