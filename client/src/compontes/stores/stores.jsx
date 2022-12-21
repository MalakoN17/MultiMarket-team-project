import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DesktopNav from "../navbar/DesktopNav"
import MobileNav from "../navbar/MobileNav"
import Store from './store';
import './style.css';
import vegetablesImage from '../../assets/images/Screenshot 2022-12-14 232104.png';
import smallHome from '../../assets/images/smallhome.png';
import businessLiaisonLogo from '../../assets/images/businessLiaisonLogo.png';
import onion from '../../assets/images/products_images/onions.jpg';
import { useParams } from 'react-router-dom';

export default function Stores() {
  const {id} = useParams()
  const {cityValue} = useSelector((state)=> state.city);
  
 
  const [stores, setStores] = useState([]);
  const [department, setDepartment] = useState([]);
  
  useEffect(() => {
    console.log(id)
    const getStores = async () => {
      const res = await axios.get(`http://localhost:8000/api/store/department/${id}`);
      console.log(res.data);
      setStores(res.data);
    };
    const getDepartment = async ()=>{
      const res = await axios.get(`http://localhost:8000/api/department/${id}`)
      console.log(res.data)
      setDepartment(res.data)

    }
    getStores();
    getDepartment();
  }
  
  , []);

   


  return (
    <>
    <DesktopNav />
    <MobileNav />
      <div className="background-image w-full ">
        <img src={department.topImage} alt=""  className="shadow-xl w-full h-96" />
      </div>
      <div className="text-center">
        <h1 className="text-[30px]">רשימת חנויות בקטוגריית , {department.name}</h1>
      </div>
      <div className="container flex justify-center">
        <div className="container gap-3 w-[40%]">
          <div>
            <div className="flex gap-3">
              <h3>סנן לפי תוצאות:</h3>
              <p className="text-blue-400 flex">{cityValue} </p>
              <p className="text-blue-400 flex">{department.name}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <h4>אזורים</h4>
              <p>אזור מרכז</p>
              <p>אזור מרכז</p>
              <p>אזור מרכז</p>
              <p>אזור מרכז</p>
              <p>אזור מרכז</p>
            </div>
            <div>
              <h4>ישובים</h4>
              <p>יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
            </div>
            <div>
              <h4>סוגי חנויות</h4>
              <p>ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
            </div>
            <div>
              <h4>סוגי מוצרים</h4>
              <p>בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={smallHome} alt="" width="35px" />
            <p>
              נמצאו <span className="text-green-400">78</span> חנויות במודעין
            </p>
          </div>
          <div className="flex flex-col gap-1">
            {stores.filter((store)=>store.address.city === cityValue).map((store,index)=>{
              return(
                <div key={index}><Store store={store} /></div>
              )
            })}
            <div>
              <button className="pul-btn text-gray-800">+</button>
            </div>
          </div>
        </div>
        <div className="w-[18%] sm:flex-none block border">
          <div className="bg-gray-800 p-2 text-center">
            <h3 className="text-white">עגלת קניות</h3>
          </div>
          <div>
            <div className="bg-gray-100 flex gap-1 p-1">
              <div className="store-img-cart-container">
                <img
                  className="store-img-cart"
                  src={businessLiaisonLogo}
                  alt=""
                />
              </div>
              <p>שם החנות</p>
            </div>
            <div className="products-cart-container">
              <div className='flex items-center justify-around'>
                <img src={onion} alt="" width="60px"/>
                <div>
                    <p className='product-name'>שם מוצר</p>
                    <p className='text-gray-400'>שם החנות</p>
                </div>
                <div className="flex gap-1">
                  <p>2</p>
                  <span className="add-btn">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

