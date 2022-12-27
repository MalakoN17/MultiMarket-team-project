import React from 'react'
import MobileNav from '../compontes/navbar/MobileNav'
import DesktopNav from '../compontes/navbar/DesktopNav'
import LoginUserNavbar from '../compontes/navbar/LoginUserNavbar'
import FooterMobile from '../compontes/footer/FooterMobile'
import Footer from '../compontes/footer/Footer'

export default function FQ() {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <LoginUserNavbar />
       <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              שאלות נפוצות
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              השאלות שנשאלו הכי הרבה על ידי הלקוחות שלנו ושאלות נוספות מאיתנו.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  תוך כמה זמן מוצרים חדשים עולים לאתר ?
                </summary>
                <span>
                 המוצרים עולים לאתר בלייב, ברגע שבעל החנות מעדכן את האספקה שלו.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                 האם התשלום באתר מאובטח ?
                </summary>
                <span>
                 בוודאי, התשלום באתר מאובטח לכל הכרטיסים 
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  האם אתם עובדים עם כל החנויות בארץ
                </summary>
                <span>
                  כרגע לא, אנחנו עובדים עם חלק מהחנויות בערי המרכזיות בארץ.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  האם ההתחברות לאתר בטוחה?
                </summary>
                <span className="px-4 py-2">
                  בוודאי, ההתחברות מאובטחת ומוצפנת כך שלכל משתמש או בעל חנות יש גישה להרשאות שלו.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  האם אפשר ליצור קשר לגבי סטטוס המזנה או כל דבר אחר ?
                </summary>
                <span className="px-4 py-2">
                  כן כמובן, יש לנו שירות צ'אט בשביל הדברים האלה ?
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  תוך כמה זמן מגיע המשלוח ?
                </summary>
                <span className="px-4 py-2">
                  המשלוח מגיע בהתאם לזמן השילוח שקובע הלקוח עצמו.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FooterMobile />
    </div>
  )
}
