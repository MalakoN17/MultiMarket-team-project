import React, { useState,useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {clearSelect, settingSelect} from "../../features/city/citySlice"

export default function PopOut() {
  const {cityValue,show} = useSelector((state)=> state.city);
  const dispatch = useDispatch();
  const [city,setCity] = useState(" ")

  const handleCitySelect = (e) => {
    setCity(e.target.value);
    
  };

  const handleForm =(e)=>{
    e.preventDefault()
    dispatch(settingSelect(city))
  }

  const exitForm = (e)=>{
    e.preventDefault()
    dispatch(settingSelect("תל אביב"))
  }

  return (
    
    <div className={show ? 'hidden' : 'block'}>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center  sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10">
                    <button onClick={exitForm}>
                        <CloseIcon  />
                    </button>
                  </div>
                  <div className="mt-3 mx-10 text-center items-center sm:mt-0 sm:ml-4 sm:text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      אנא ידע אותנו לגבי מיקומך <LocationOnIcon />
                    </h3>
                    <div className="mt-3">
                      <select
                      onChange={(e)=>handleCitySelect(e)}
                        value={city}
                        name="cities"
                        id="cities"
                        className='rounded-lg'
                      >
                        <option value="ירושלים">ירושלים </option>
                        <option value="תל אביב">תל אביב</option>
                        <option value="חיפה">חיפה</option>
                        <option value="נתניה">נתניה</option>
                        <option value="אשקלון">אשקלון</option>
                        <option value="שוהם">שוהם</option>
                        <option value="יבנה">יבנה</option>
                        <option value="רחובות">רחובות</option>
                        <option value="אילת">אילת</option>
                        <option value="לוד">לוד</option>
                        <option value="רמלה">רמלה</option>
                        <option value="ראשון לציון">ראשון לציון</option>
                        <option value="אשדוד">אשדוד</option>
                        <option value="פתח תקווה">פתח תקווה</option>
                        <option value="באר שבע">באר שבע</option>
                        <option value="בני ברק">בני ברק</option>
                        <option value="רמת גן">רמת גן</option>
                        <option value="אשקלון">אשקלון</option>
                        <option value="קרית שמונה">קרית שמונה</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <button onClick={handleForm}
                  type="button"
                  className='text-white text-xl bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 mb-6 mt-4'
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
