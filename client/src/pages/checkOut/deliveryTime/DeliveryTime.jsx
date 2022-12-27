import React, { useState, useEffect } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShippingHour from './ShippingHour';
import ShippingDay from './ShippingDay';
import { useDispatch, useSelector } from 'react-redux';
import { addDelivery } from '../../../features/address/address';

function DeliveryTime({ hour, setHour, day, setDay }) {
  const deliver = useSelector((state) => state.address);
  const [show, setShow] = useState(false);
  const [length, setLength] = useState(4);
  const [delivery, setDelivery] = useState({
    const: 25,
    time: '',
    date: '',
    kind: 'regular',
  });

  useEffect(() => {
    // console.log(deliver, delivery);
  }, []);
  const dispatch = useDispatch();
  const addDeliveryDetails = () => {
    dispatch(addDelivery(delivery));
  };
  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="flex flex-col w-full md:w-[95%] justify-center align-center bg-white border-b-2  p-2 md:p-14">
      {show ? (
        <>
          <div className="flex justify-between">
            <div className="flex">
              <AccessTimeIcon className="text-[#0899A5]" />
              <h1 className="font-semibold mr-3">בחירת זמן אספקה</h1>
            </div>
            <KeyboardArrowDownIcon
              className="text-[#0899A5]"
              onClick={() => toggle()}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between ">
            <div className="flex">
              <AccessTimeIcon className="text-[#0899A5]" />
              <h1 className="font-semibold mr-3">בחירת זמן אספקה</h1>
            </div>
            <KeyboardArrowDownIcon
              className="text-[#0899A5]"
              onClick={() => toggle()}
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <ShippingDay day={day} setDay={setDay} />
          </div>
          <div>
            <p>בחר שעה למשלוח</p>
            <button
              onClick={() =>
                setDelivery({ ...delivery, kind: 'express' })
              }
              className=" border-solid rounded-md border-2 border-[#0899A5] w-[80%]"
            >
              <AccessTimeFilledIcon className="text-[#0899A5]" />
              משלוח אקספרס - מגיע לביתך תוך שעה
            </button>
            <div className="flex flex-col md:flex-row gap-2"></div>
            <div className="container w-[80%]">
              <div>
                <ShippingHour hour={hour} setHour={setHour} />
              </div>
              <button
                onClick={addDeliveryDetails}
                type="submit"
                className="text-white bg-[#0899A5] hover:bg-[#0899A5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                שמור
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DeliveryTime;
