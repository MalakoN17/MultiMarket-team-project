import Department from '../compontes/main/Department'
import MobileNav from '../compontes/navbar/MobileNav'
import DesktopNav from '../compontes/navbar/DesktopNav'
import FooterMobile from '../compontes/footer/footerMobile'
import Footer from '../compontes/footer/Footer'
import React from 'react'

function Main() {
    return (
        <div>
            <MobileNav />
            <DesktopNav />
            <Department />
            <FooterMobile />
            <Footer />
        </div>
    )
}

export default Main