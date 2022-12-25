import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Contacts from '../chatComponents/Contacts';
import Welcome from '../chatComponents/Welcome';
import ChatContainer from '../chatComponents/ChatContainer';
import { io } from 'socket.io-client'
import Footer from '../compontes/footer/Footer';
import DesktopNav from '../compontes/navbar/DesktopNav';
import NeedLogin from '../chatComponents/NeedLogin';

export default function Chat() {
  const socket = useRef()
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);

  const addItem = function () {
    const newItem = {
      '_id': "63a0a989bb72687b51129f3d",
      'name': 'avishay',
      'lastName': 'avraham',
      'username': 'Avishay Avraham',
      'profileImage': 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
    };
    localStorage.setItem('chat-app-user', JSON.stringify(newItem));
  };

  useEffect(() => {
    addItem()
  }, [])

  const getContacts = async () => {
    const data = await axios.get('http://localhost:8000/api/store')
    setContacts(data.data)
  }

  useEffect(() => {
    getContacts()
  }, [])


  const checkLocalStorage = async () => {
    if (!localStorage.getItem('chat-app-user')) {
      navigate('/NeedLogin')
    } else {
      setCurrentUser(
        await JSON.parse(localStorage.getItem('chat-app-user')))
    }
  }

  useEffect(() => {
    if (currentUser) {
      socket.current = io('http://localhost:8000');
      socket.current.emit('add-user', currentUser._id);
    }
  }, [currentUser])

  useEffect(() => {
    checkLocalStorage()
  }, [])

  const handleChatChange = (chat) => {
    setCurrentChat(chat)
  }

  return (
    <div className=''>
      <DesktopNav />
      <div className='bg-neutral-100 w-full p-10 '>
        <div className="w-3/4 mx-auto">
          <div className="min-w-full border rounded bg-white shadow-2xl flex flex-row-reverse">
            <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
            {
            currentChat === undefined ? 
            <Welcome currentUser={currentUser}/> : 
            <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket} />
            }  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

