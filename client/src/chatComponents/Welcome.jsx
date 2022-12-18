import React from 'react'

export default function Welcome({currentUser}) {
  return (
    <div>
       <h1>Welcome <span> {currentUser?.username}!</span></h1>
       <h3>please select a chat to start Messaging</h3>
    </div>
  )
}
