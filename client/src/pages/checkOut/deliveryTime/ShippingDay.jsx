import React from 'react';

function ShippingDay({ day, setDay }) {
  const date = new Date();
  const days = [
    { day: 'ראשון', date: `${date.getDate()}.${date.getMonth()} ` },
    { day: 'שני', date: `${date.getDate() +2}.${date.getMonth()}` },
    { day: 'שלישי', date: `${date.getDate()+ 3}.${date.getMonth()}`  },
    { day: 'רביעי', date: `${date.getDate() + 4}.${date.getMonth()}` },
    { day: 'חמישי', date: `${date.getDate()  + 5}.${date.getMonth()}` },
    { day: 'שישי', date: `${date.getDate()  + 6}.${date.getMonth()}` },
  ];
  return (
    <>
      {days.map((day, index) => {
        return (
          <div className='' key={index}>
            <button
              key={index}
              className="p-0 md:p-4 w-full bg-gray-200 rounded-md hover:bg-[#0899A5] hover:text-white"
            >
              <p className='p-2'>{day.day} {day.date}</p>
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ShippingDay;
