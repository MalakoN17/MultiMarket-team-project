import PopOut from '../compontes/popOut/popOut'
import Department from '../compontes/main/Departments'
import MobileNav from '../compontes/navbar/MobileNav'
import DesktopNav from '../compontes/navbar/DesktopNav'
import LoginUserNavbar from '../compontes/navbar/LoginUserNavbar'
import FooterMobile from '../compontes/footer/footerMobile'
import Footer from '../compontes/footer/Footer'
import React from 'react'

function Main() {
    
    return (
        <div>
            <PopOut />
            <MobileNav />
            <DesktopNav />

            <LoginUserNavbar/>
            {/* <Departments /> */}
            <Department />
            <FooterMobile />
            <Footer />
        </div>
    )
}

export default Main