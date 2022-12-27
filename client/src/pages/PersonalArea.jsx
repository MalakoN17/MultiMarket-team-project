import React from 'react';
import { useSelector } from 'react-redux';
import MobileNav from '../compontes/navbar/MobileNav'
import DesktopNav from '../compontes/navbar/DesktopNav'
import LoginUserNavbar from '../compontes/navbar/LoginUserNavbar'
import FooterMobile from '../compontes/footer/footerMobile'
import Footer from '../compontes/footer/Footer'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BadgeIcon from '@mui/icons-material/Badge';
import LockResetIcon from '@mui/icons-material/LockReset';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LogoutIcon from '@mui/icons-material/Logout';

export default function PersonalArea() {
  const user = useSelector(state => state.user);
  console.log();


  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <LoginUserNavbar />
      <div className="grid grid-flow-row md:grid-flow-col ">
        <aside className="w-96" aria-label="Sidebar">
          <div
            className="z-10 flex justify-center"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <img
              className="w-24  rounded-full"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <p className="text-center">שלום דנה</p>
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="underline underline-offset-1 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ShoppingBagIcon />
                  <span className=" ml-3">ההזמנות שלי </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BadgeIcon />
                  <span className="ml-3">מידע אישי</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LockResetIcon />
                  <span className="ml-3">החלפת סיסמה</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <HomeIcon />
                  <span className="ml-3">הכתובת שלי</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <CreditCardIcon />
                  <span className="ml-3">נתוני תשלום</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogoutIcon />
                  <span className="ml-3">התנתקות</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <h1 className="text-center font-bold  text-gray-700">
                מידע אישי
              </h1>
              <div className="overflow-hidden shadow pt-4 sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        שם פרטי
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        שם משפחה
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        דואר אלקטרוני
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                      >
                        מין
                      </label>
                      <div className="flex items-center mb-4">
                        <input
                          id="country-option-1"
                          type="radio"
                          name="countries"
                          defaultValue="USA"
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                          defaultChecked
                        />
                        <label
                          htmlFor="country-option-1"
                          className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          זכר
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="country-option-2"
                          type="radio"
                          name="countries"
                          defaultValue="Germany"
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="country-option-2"
                          className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          נקבה
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="country-option-3"
                          type="radio"
                          name="countries"
                          defaultValue="Spain"
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="country-option-3"
                          className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          לא מוגדר
                        </label>
                      </div>
                    </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="year"
                        className="block text-sm font-medium text-gray-700"
                      >
                        שנה
                      </label>
                      <input
                        type="number"
                        name="year"
                        id="year"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        חודש
                      </label>
                      <input
                        type="number"
                        name="month"
                        id="month"
                        min={1}
                        max={12}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        יום
                      </label>
                      <input
                        type="number"
                        name="day"
                        id="day"
                        min={1}
                        max={31}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
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
