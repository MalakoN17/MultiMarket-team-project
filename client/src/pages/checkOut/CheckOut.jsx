import React, { useState } from 'react';
import Footer from '../../compontes/footer/Footer';
import Cart from '../../compontes/main/Cart';
import DesktopNav from '../../compontes/navbar/DesktopNav';
import PayButton from '../../compontes/stripe/PayButton';
import DeliveryDetails from './deliveryDetails/DeliveryDetails';
import DeliveryTime from './deliveryTime/DeliveryTime';

export default function CheckOut() {


  return (
    <div className="bg-neutral-100">
      <DesktopNav />
      <div className='flex justify-center'>
      <div className="bg-neutral-100 p-0 flex flex-col items-center w-[60%]">
        <DeliveryDetails />
        <DeliveryTime />
        <PayButton />
      </div>
      {/* <Cart className='flex flex-none sm:flex-block'/> */}
      </div>
      <Footer />
    </div>
  );
}
