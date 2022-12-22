import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/multimarket-logo1.png"
import "./destkopNav.css"
 
function DesktopNav() {

  const navigate = useNavigate();

  return (
    <div>
    {/* <div className="awesome" > */}
      <nav className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-row-reverse  h-16 items-center justify-between">
            {/* <div className="absolute inset-y-0 left-0 flex items-center">
            </div> */}
            <div className="flex ">
              {/* <div className="flex flex-shrink-0 mx-60 items-center"> */}
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
                <p>MULTI MARKET</p>
              {/* </div> */}
            </div>
            <div className="hidden  sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
              {/* <div className="hidden  sm:block"> */}
                <div className="flex space-x-4">
                  <a href="/contactUs" className="menuNav">צור קשר</a>
                  <a href="/question" className="menuNav"> שאלות נפוצות</a>
                  <a href="#" className="menuNav" onClick={()=> navigate("register")}>הרשמה</a>
                  <a href="#" className="menuNav" onClick={()=> navigate("login")}>כניסת משתמש</a>
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
 
export default DesktopNav