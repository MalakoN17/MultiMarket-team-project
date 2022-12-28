import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/atlaslogo.png"
import "./destkopNav.css"
 
export default function DesktopNav() {

  const navigate = useNavigate();

  const loginEvent = ()=>{
    sessionStorage.setItem('history', window.location.href);
    navigate("/login");
  }

  const {user} = useSelector(state=> state.user)
  const {show} = useSelector((state)=> state.city);

  return (
    <div>
    {/* <div className="awesome" > */}
      <nav className={user?.currentUser ? "hidden" : "block"}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-row-reverse  h-16 items-center justify-between">
            {/* <div className="absolute inset-y-0 left-0 flex items-center">
            </div> */}
            <div className="flex flex-row-reverse	">
              {/* <div className="flex flex-shrink-0 mx-60 items-center"> */}
                <img onClick={()=>navigate("/")} className="h-10 w-10" src={logo} alt="Your Company" width='80px' height='60px'/>
                {/* <p>MULTI MARKET</p> */}
              {/* </div> */}
            </div>
            <div className="hidden  sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
              {/* <div className="hidden  sm:block"> */}
                <div className="flex space-x-4">
                <a href="/aboutUs" className="menuNav">אודתינו</a>
                  <a href="/contactUs" className="menuNav">צור קשר</a>
                  <a href="/question" className="menuNav"> שאלות נפוצות</a>
                  <a href="/chat" className="menuNav">צ'אט עם נציג</a>
                  <a href="#" className="menuNav" onClick={()=> navigate("register")}>הרשמה</a>
                  <a href="#" className="menuNav" onClick={()=> loginEvent()}>כניסת משתמש</a>
                </div>
              {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    {/* </div> */}
  </div>
  )
}
 