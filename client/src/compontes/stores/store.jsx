import React from 'react'
import businessLiaisonLogo from '../../assets/images/businessLiaisonLogo.png'
import { useNavigate } from 'react-router-dom';
import './style.css';
export default function Store(props) {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log(props.store)
    
  }
  return (
    <div>
      
        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={props.store.lightlogo.url} alt="" width="150px"/>
              <div>
                <h4><b>{props.store.name}</b></h4>
                <p></p>
                <p>{props.store.description}</p>
                <div className="flex">
                  <img
                    className="business-liaison-logo"
                    src={businessLiaisonLogo}
                    alt=""
                  />
                  <div>
                    <p>{props.store.address.street}, {props.store.address.building}</p>
                  </div>
                </div>
              </div>
              <button className="store-btn" onClick={()=> handleClick(navigate(`/store/${props.store._id}`))}>קנה בחנות זו</button>
            </div>
    </div>
  )
}