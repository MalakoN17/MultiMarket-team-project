import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ShippingHour({ hour, setHour }) {
  const [length, setLength] = useState(4);
  
  const hours = [
    { hour: '09:00-10:00' },
    { hour: '10:00-11:00' },
    { hour: '12:00-13:00' },
    { hour: '14:00-15:00' },
    { hour: '16:00-17:00' },
    { hour: '18:00-19:00' },
    { hour: '20:00-21:00' },
    { hour: '22:00-23:00' },
  ];
  const handleHourInput = (e) => {
    const { name, value } = e.target;
    setHour({ ...hour, [name]: value });
  };
  return (
    <>
      {hours.slice(0, length).map((hour, index) => {
        return (
          <div key={index} className="flex justify-between">
            <div className="flex">
              <div className="flex items-center">
                <input
                  onChange={handleHourInput}
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value="10:00-11:00"
                  name="hours"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="">{hour.hour}</label>
              </div>
            </div>
            {/* <DateBtn hour={hour.hour} /> */}
          </div>
        );
      })}
      <div className="flex flex-none">
        <p>שעות נוספות</p>
        <KeyboardArrowDownIcon
          className="text-[#0899A5]"
          onClick={() => setLength(length + 3)}
        />
      </div>
    </>
  );
}

export default ShippingHour;
