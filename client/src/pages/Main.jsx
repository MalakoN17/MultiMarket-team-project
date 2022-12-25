import PopOut from '../compontes/popOut/popOut'
import Departments from '../compontes/main/Departments'
import MobileNav from '../compontes/navbar/MobileNav'
import DesktopNav from '../compontes/navbar/DesktopNav'
import LoginUserNavbar from '../compontes/navbar/LoginUserNavbar'
import FooterMobile from '../compontes/footer/footerMobile'
import Footer from '../compontes/footer/Footer'
import React from 'react'
import Departments from '../compontes/main/Departments'

function Main() {
    
    return (
        <div>
            <PopOut />
            <MobileNav />
            <DesktopNav />

            <LoginUserNavbar/>
            {/* <Departments /> */}
            <Departments />
            <FooterMobile />
            <Footer />
        </div>
    )
}

export default Main