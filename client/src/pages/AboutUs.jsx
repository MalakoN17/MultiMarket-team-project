import React from 'react';
import MobileNav from '../compontes/navbar/MobileNav';
import DesktopNav from '../compontes/navbar/DesktopNav';
import LoginUserNavbar from '../compontes/navbar/LoginUserNavbar';
import FooterMobile from '../compontes/footer/footerMobile';
import Footer from '../compontes/footer/Footer';
import teamPicture from '../assets/images/teampicture.jpeg';
import royPicture from '../assets/images/roypic.JPG';
import avielPicture from '../assets/images/aviel.jpeg';
import malakoPicture from '../assets/images/malako.jpeg';
import oshratPicture from '../assets/images/oshrat.jpeg';
import avishayPicture from '../assets/images/avishay.jpg';
import destawPicture from '../assets/images/destaw.jpeg';

export default function AboutUs() {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <LoginUserNavbar />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              קצת עלינו
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
              חבורת סטודנטים מכל רחבי הארץ, במכללת "טק קריירה". ,בעלי חזון משותף
              ששם דגש לשפר את חוויית המשמתש של לקוח באתרי קניות ואת חיי היומיום
              בפרט באמצעות אפליקצייה שמאחדת את הפתרון לשני הבעיות במקום אחד קליל
              ונוח לשימוש.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src={teamPicture}
              alt="A group of People"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              הסיפור של אטלס
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
              אפליקציה שבאה לענות על חווית הצרכן בקניית מוצרים מקטגוריות וחנויות
              שונות, במקום אחד. באמצעות תשלום מאובטח וחד פעמי בסיום הרכישה
              ונשענת על מענה מהיר בעזרת צ'אט 24/7 עם נציגינו. אטלס מובילה את
              שירות הקניות האינטרנטי העולמי.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-3 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src={oshratPicture}
                  alt="Alexa featured Image"
                />
                <img
                  className="md:hidden block"
                  src={oshratPicture}
                  alt="Alexa featured Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  אושרת טסמה
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src={malakoPicture}
                  alt="Olivia featured Image"
                />
                <img
                  className="md:hidden block"
                  src={malakoPicture}
                  alt="Olivia featured Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  מלקו נגטו
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src={avielPicture}
                  alt="Liam featued Image"
                />
                <img
                  className="md:hidden block"
                  src={avielPicture}
                  alt="Liam featued Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  אביאל שאטו
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src={destawPicture}
                  alt="Elijah featured image"
                />
                <img
                  className="md:hidden block"
                  src={destawPicture}
                  alt="Elijah featured image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  דסטאו מלסה
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src={avishayPicture}
                  alt="Elijah featured image"
                />
                <img
                  className="md:hidden block"
                  src={avishayPicture}
                  alt="Elijah featured image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  אבישי אברהם
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src={royPicture}
                  alt="Elijah featured image"
                />
                <img
                  className="md:hidden block"
                  src={royPicture}
                  alt="Elijah featured image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  רועי מקונן
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterMobile />
    </div>
  );
}
