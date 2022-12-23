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
      <div className="flex flex-col sm:flex-row items-center sm:items-end  w-40 gap-4 p-2">
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
      </div>
      {/* <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={props.store.coverImage.url}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {props.store.name}
              </h2>
              <p className="text-gray-900  title-font font-medium mb-1">{props.store.description}
              </p>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">{props.store.address.city},</span>
                  <span className="text-gray-600 ml-3">{props.store.address.street} {props.store.address.building}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
