import Department from '../compontes/main/Department'
import Departments from "../compontes/main/Departments"
import DesktopNav from '../compontes/navbar/DesktopNav'
import LoginUserNavbar from '../compontes/navbar/LoginUserNavbar'
import Footer from '../compontes/footer/Footer'
import React from 'react'
import { useSelector } from 'react-redux'

function Main() {
    const user = useSelector(state=> state.user)
    console.log(user.currentUser);
    return (
        <div>
            <DesktopNav />
            {/* <LoginUserNavbar/> */}
            {/* <Departments /> */}
            <Department />
            <Footer />
        </div>
    )
}

export default Main