import React from 'react'
   
export default function Welcome({currentUser}) {
  return (
    <div className='flex items-center justify-center w-full bg-white '>
      <div className='flex flex-col items-center justify-center h-screen md:h-[30px] md:w-full w-3/4'>
          <img className='h-[60px]' src="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif" alt="" />
      <h1 className='text-xl'>שלום {currentUser?.firstName},</h1>
        <h3 className='text-lg text-center'>אנא בחרי צ'אט בכדי להתחיל שיחה</h3>
      </div>
    </div>
  )
}      
