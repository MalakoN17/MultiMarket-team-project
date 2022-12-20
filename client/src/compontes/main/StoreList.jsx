import React from 'react';
import './style.css';
import vegetablesImage from '../../assets/images/Screenshot 2022-12-14 232104.png';
import smallHome from '../../assets/images/smallhome.png';
import businessLiaisonLogo from '../../assets/images/businessLiaisonLogo.png';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Cart from './Cart';
function StoreList() {
  return (
    <>
      <div className="background-image w-full">
        <img src={vegetablesImage} alt="" width="100%" className="shadow-xl" />
      </div>
      <div className="text-center">
        <h1 className="text-[30px]">רשימת חנויות בקטגוריה </h1>
      </div>
      <div className="container  md:w-100% flex justify-center gap-2">
        <div className="container gap-3 w-[40%]">
          <div>
            <div className="flex gap-3">
              <h3>סנן לפי תוצאות:</h3>
              <p className="text-blue-400 flex">מודעין </p>
              <p className="text-blue-400 flex">בית קפה </p>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <h4>אזורים</h4>
              <p className="text-blue-400">אזור מרכז</p>
              <p>אזור מרכז</p>
              <p>אזור מרכז</p>
              <p>אזור מרכז</p>
              <p>אזור מרכז</p>
            </div>
            <div>
              <h4>ישובים</h4>
              <p className="text-blue-400">יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
              <p>יבנה</p>
            </div>
            <div>
              <h4>סוגי חנויות</h4>
              <p className="text-blue-400">ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
              <p>ירקניה</p>
            </div>
            <div>
              <h4>סוגי מוצרים</h4>
              <p className="text-blue-400">בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
              <p>בשרי</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={smallHome} alt="" width="35px" />
            <p>
              נמצאו <span className="text-green-400">78</span> חנויות במודעין
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={smallHome} alt="" />
              <div>
                <h4>חוות הבית</h4>
                <p></p>
                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                <div className="flex">
                  <img
                    className="business-liaison-logo"
                    src={businessLiaisonLogo}
                    alt=""
                  />
                  <div>
                    <p>עמק זבולון 3,</p>
                    <p>מודעין, אזור המרכז</p>
                  </div>
                </div>
              </div>
              <button className="store-btn">קנה בחנות זו</button>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={smallHome} alt="" />
              <div>
                <h4>חוות הבית</h4>
                <p></p>
                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                <div className="flex">
                  <img
                    className="business-liaison-logo"
                    src={businessLiaisonLogo}
                    alt=""
                  />
                  <div>
                    <p>עמק זבולון 3,</p>
                    <p>מודעין, אזור המרכז</p>
                  </div>
                </div>
              </div>
              <button className="store-btn">קנה בחנות זו</button>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={smallHome} alt="" />
              <div>
                <h4>חוות הבית</h4>
                <p></p>
                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                <div className="flex">
                  <img
                    className="business-liaison-logo"
                    src={businessLiaisonLogo}
                    alt=""
                  />
                  <div>
                    <p>עמק זבולון 3,</p>
                    <p>מודעין, אזור המרכז</p>
                  </div>
                </div>
              </div>
              <button className="store-btn">קנה בחנות זו</button>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={smallHome} alt="" />
              <div>
                <h4>חוות הבית</h4>
                <p></p>
                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                <div className="flex">
                  <img
                    className="business-liaison-logo"
                    src={businessLiaisonLogo}
                    alt=""
                  />
                  <div>
                    <p>עמק זבולון 3,</p>
                    <p>מודעין, אזור המרכז</p>
                  </div>
                </div>
              </div>
              <button className="store-btn">קנה בחנות זו</button>
            </div>
          </div>
        </div>
        <div className="w-[18%] sm:flex-none block border">
          <Cart />
        </div>
      </div>
      <div className="text-center relative left-[160px]">
        <ControlPointIcon className="open-store" />
      </div>
    </>
  );
}

export default StoreList;
