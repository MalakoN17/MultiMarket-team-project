import Department from '../compontes/main/Department'
import Departments from "../compontes/main/Departments"
import DesktopNav from '../compontes/navbar/DesktopNav'
import Footer from '../compontes/footer/Footer'
import React from 'react'

function Main() {
    return (
        <div>
            <DesktopNav />
            {/* <Departments /> */}
            <Department />
            <Footer />
        </div>
    )
}

export default Main