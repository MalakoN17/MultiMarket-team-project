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
              <img className='p-4 w-52 h-36' src={props.store.lightlogo.url} alt={props.store.name} />
              <div>
                <h4><b>{props.store.name}</b></h4>
                <p></p>
                <p className='w-60 sm:block hidden'>{props.store.description}</p>
                <div className='flex sm:flex-row flex-col sm:justify-between '>
                <div className="flex ">
                  <img
                    className="business-liaison-logo"
                    src={businessLiaisonLogo}
                    alt=""
                  />
                  <div>
                    <p>{props.store.address.street}, {props.store.address.building}</p>
                  </div>
                </div>
                 <button className="add-btn hover:bg-green-500 text-white font-bold py-2 px-4 border rounded scale-90 transition duration-300 hover:scale-100 transform" onClick={()=> handleClick(navigate(`/store/${props.store._id}`))}>קנה בחנות זו</button>
                </div>
              </div>
            </div>
    </div>
  )
}