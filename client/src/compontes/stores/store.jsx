import React from 'react'
import { useNavigate } from 'react-router-dom';

import './style.css';

export default function Store(props) {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(props.store)
    navigate(`/store/${props.store._id}`)
  }

  return (
    <div>
      
        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={props.smallHome} alt="" />
              <div>
                <h4><b>{props.store.name}</b></h4>
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
