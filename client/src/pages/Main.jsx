import PopOut from '../compontes/popOut/popOut'
import Departments from '../compontes/main/Departments'
import MobileNav from '../compontes/navbar/MobileNav'
import DesktopNav from '../compontes/navbar/DesktopNav'
import LoginUserNavbar from '../compontes/navbar/LoginUserNavbar'
import FooterMobile from '../compontes/footer/footerMobile'
import Footer from '../compontes/footer/Footer'
import React from 'react'
import { useSelector } from 'react-redux'

function Main() {
    const user = useSelector(state=> state.user)
    console.log(user.currentUser);
    return (
        <div>
            <PopOut />
            <MobileNav />
            <DesktopNav />
            {/* <LoginUserNavbar/> */}
            {/* <Departments /> */}
            <Department />
            <FooterMobile />
            <Footer />
        </div>
    )
}

export default Main