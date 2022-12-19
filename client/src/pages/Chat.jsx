import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Contacts from '../chatComponents/Contacts';
import Welcome from '../chatComponents/Welcome';
import ChatContainer from '../chatComponents/ChatContainer';
import {io} from 'socket.io-client'



export default function Chat() {
  const socket = useRef()
  const navigate = useNavigate();
  const [contacts,setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);

  const checkLocalStorage =  async () => {
    if(!localStorage.getItem('chat-app-user')){
      //component of login
    }else{
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
      <div className="container mx-auto">
        <div className="min-w-full border rounded border-red-500 columns-2">
            <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange}/>
           {/* {
            currentChat === undefined ?  */}
            {/* <Welcome currentUser={currentUser}/> : */}
            <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket} />
            {/* }  */}
        </div>
      </div>
  )
}

