import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import DesktopNav from "../navbar/DesktopNav"
import LoginUserNavbar from '../navbar/LoginUserNavbar';
import MobileNav from "../navbar/MobileNav"
import Footer from '../footer/Footer';
import FooterMobile from '../footer/footerMobile';
import Store from './Store';
import {changeSelect} from "../../features/city/citySlice"
import './style.css';
// import vegetablesImage from '../../assets/images/Screenshot 2022-12-14 232104.png';
import smallHome from '../../assets/images/smallhome.png';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import businessLiaisonLogo from '../../assets/images/businessLiaisonLogo.png';
// import onion from '../../assets/images/products_images/onions.jpg';
import { useParams } from 'react-router-dom';
import Cart from '../main/Cart';
import PopOut from '../popOut/popOut';
import { border, height, width } from '@mui/system';

export default function Stores() {
  const {id} = useParams()
  const {cityValue,show} = useSelector((state)=> state.city);
  const dispatch = useDispatch()
  
  const [stores, setStores] = useState([]);
  const [department, setDepartment] = useState([]);
  
  useEffect(() => {
    const getStores = async () => {
      const res = await axios.get(`http://localhost:8000/api/store/department/${id}`);

      setStores(res.data)

    };
    const getDepartment = async ()=>{
      const res = await axios.get(`http://localhost:8000/api/department/${id}`)
      setDepartment(res.data)
    }

    getStores();
    getDepartment();
    console.log(stores);
    console.log(department);
  }  
  
  , []);



  return (
    <>
    <DesktopNav />
    <LoginUserNavbar/>
      <div className="sm:h-96 h-40 w-full"
      style={{
        backgroundImage: "url(" + department?.topImage + ")",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        // height:"40vh"
      }}
      >

        {/* <img src={department?.topImage} alt="" className="shadow-xl h-96 w-full" 
        /> */}
      </div>
      <div className="text-center">
        <h1 className="text-[30px]">רשימת חנויות בקטוגריית , {department.name}</h1>
      </div>
      <div className="container  md:w-100% flex justify-center gap-2">
        <div className="container gap-3 w-[60%]">
          <div>
            <div className="flex gap-3">
              <h3>סנן לפי תוצאות:</h3>
              <p className="text-blue-400 flex">{cityValue} </p>
              <p className="text-blue-400 flex">{department.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={smallHome} alt="" width="35px" />
            <p>
              נמצאו <span className="text-green-400">{stores.filter((store)=>store.address.city === cityValue).length}</span> חנויות ב{cityValue}
            </p>
          </div>
          <div className="flex flex-col gap-1 shadow-2xl">
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
        <div className="hidden md:block w-[18%] sm:flex-none  ">
          <div className='border'><Cart  /></div>
        </div>
      </div>
      <div className="text-center relative left-[160px]">
        <ControlPointIcon className="open-store" />
      </div>
      <Footer />
      <FooterMobile />
      <MobileNav />
    </>
  )
}

