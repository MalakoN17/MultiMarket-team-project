import React from 'react';
import PayButton from '../compontes/stripe/PayButton';
function CheckoutSuccess() {
  return (
    <>
      <PayButton />
      <div className="container text-center bg-gray-400 flex flex-col items-center justify-center">
        <div>
          <h1>תודה שהזמנת דרכנו</h1>
          <h5>המשלוח בדרך אלייך</h5>
          <hr />
          <h5>מספר הזמנה:</h5>
          <button>לחץ כאן לסיום רכישה</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutSuccess;
