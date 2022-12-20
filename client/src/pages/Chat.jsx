import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Contacts from '../chatComponents/Contacts';
import Welcome from '../chatComponents/Welcome';
import ChatContainer from '../chatComponents/ChatContainer';
import { io } from 'socket.io-client'
import Footer from '../compontes/footer/Footer';
import DesktopNav from '../compontes/navbar/DesktopNav';

export default function Chat() {
  const socket = useRef()
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);

  const checkLocalStorage = async () => {
    if (!localStorage.getItem('chat-app-user')) {
      //component of login
    } else {
      setCurrentUser(
        await JSON.parse(localStorage.getItem('chat-app-user')))
    }
  }

  // useEffect(() => {
  //   if(currentUser){
  //     socket.current = io(host);
  //     socket.current.emit('add-user', currentUser._id);
  //   }
  // },[currentUser])

  //  useEffect(() =>{
  //    backToAvatar()
  //  },[currentUser])

  //  useEffect(() =>{
  //   checkLocalStorage()
  // },[])

  const handleChatChange = (chat) => {
    setCurrentChat(chat)
  }

  return (
    <div className='w-full bg-green-50'>
      <DesktopNav/>
      <div className="w-3/4 mx-auto">
        <div className="min-w-full border rounded my-12 bg-white shadow-2xl flex flex-row-reverse">
          <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
          {/* {
            currentChat === undefined ?  */}
           {/* <Welcome currentUser={currentUser}/> :  */}
          <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket} />
           {/* }  */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

