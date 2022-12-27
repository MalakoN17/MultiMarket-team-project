import React from 'react'

export default function Welcome({currentUser}) {
  return (
    <div className='flex items-center justify-center w-full '>
      <div className='flex items-center justify-center h-screen md:h-[30px] md:w-full w-3/4'>
          <img className='h-[60px]' src="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif" alt="" />
       <h3 className='font-sans'>Please select a chat to start Messaging</h3>
      </div>
    </div>
  )
}      
