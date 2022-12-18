import Department from '../compontes/main/Department'
import DesktopNav from '../compontes/navbar/DesktopNav'
import Footer from '../compontes/footer/Footer'
import React from 'react'

function Main() {
    return (
        <div>
            <DesktopNav />
            <Department />
            <Footer />
        </div>
    )
}

export default Main