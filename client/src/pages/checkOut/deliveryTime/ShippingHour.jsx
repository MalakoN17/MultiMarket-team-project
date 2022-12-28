import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ShippingHour(props) {
  const [length, setLength] = useState(4);
  const [hour, setHour] = useState({});

  const handleHourInput = (e) => {
    const { name, value } = e.target;
    setHour({ ...hour, [name]: value });
  };
  return (
    <>
      <div className="flex justify-between">
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
            <label htmlFor="">{props.hours}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingHour;
