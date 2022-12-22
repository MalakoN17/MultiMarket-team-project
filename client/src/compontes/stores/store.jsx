import React from 'react'

import './style.css';


export default function store(props) {
  return (
    <div>
      
        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={props.smallHome} alt="" />
              <div>
                <h4>{props.store.name}</h4>
                <p></p>
                <p>{props.store.description}</p>
                <div className="flex">
                  <img
                    className="business-liaison-logo"
                    src={props.store.lightlogo.url}
                    alt=""
                  />
                  <div>
                    <p>{props.store.address.city}</p>
                    <p>{props.store.address.street}</p>
                  </div>
                </div>
              </div>
              <button className="store-btn">קנה בחנות זו</button>
            </div>
    </div>
  )
}
