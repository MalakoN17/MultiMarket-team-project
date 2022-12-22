import React from 'react'

export default function Welcome({currentUser}) {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex items-center'>
          <img className='h-[60px]' src="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif" alt="" />
       <h3 className='font-sans'>Please select a chat to start Messaging</h3>
      </div>
    </div>
  )
}
