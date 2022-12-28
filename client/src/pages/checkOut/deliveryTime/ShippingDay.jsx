import React, { useState } from 'react';
import { useEffect } from 'react';

function ShippingDay(props) {
  const [day, setDay] = useState({});

  const get = () => {
    console.log(props.days);
  };

  return (
    <>
      <div className="" >
        <button
          onClick={() => {
            setDay(props.days);
            get();
          }}
          className="p-0 md:p-4 w-full bg-gray-200 rounded-md hover:bg-[#0899A5] hover:text-white"
        >
          <p className="p-2">{props.days} </p>
          <p>{props.date}</p>
        </button>
      </div>
    </>
  );
}

export default ShippingDay;
