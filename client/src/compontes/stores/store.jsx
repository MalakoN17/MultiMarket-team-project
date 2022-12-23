import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

export default function Store(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(props.store);
    navigate(`/store/${props._id}`);
  };

  return (
    <div>
      {/* <div className="flex flex-col sm:flex-row items-center sm:items-end  w-40 gap-4 p-2">
        <img src={props.store.coverImage.url} alt="" />
        <div>
          <h4>
            <b>{props.store.name}</b>
          </h4>
          <p></p>
          <p>{props.store.description}</p>
          <div className="flex">
            <img
              className="business-liaison-logo"
              src={props.store.lightlogo.url}
              alt={props.store.name}
            />
            <div>
              <p>{props.store.address.city}</p>
              <p>{props.store.address.street}</p>
            </div>
          </div>
        </div>
        <button className="store-btn">קנה בחנות זו</button>
      </div> */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.store.coverImage.url} alt={props.store.name} />
          <div className="p-6 flex flex-col justify-start">
            <div className='flex flex-row justify-between'><h5 className="text-gray-900 text-xl font-medium mb-2">{props.store.name}</h5> <img className='w-9' src={props.store.lightlogo.url} alt="" /></div>
            <p className="text-gray-700 text-base mb-4">
            {props.store.description}
            </p>
            <p className="text-gray-600 text-xs">{props.store.address.city}, {props.store.address.street} {props.store.address.building} </p>
          </div>
          <button className="store-btn">קנה בחנות זו</button>

        </div>
      </div>
    </div>
  );
}
