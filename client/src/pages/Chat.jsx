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
import { useSelector } from 'react-redux';

export default function Chat() {
  const socket = useRef()
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [stores, setStores] = useState([]);


  const getStores = async () => {
    const data = await axios.get('http://localhost:8000/api/store');
    setStores(data.data)

}

useEffect(() => {
getStores()
},[])

  const user = useSelector(state=> state.user)
  useEffect(() => {
    setCurrentUser(user.currentUser)
  },[])

  const getContacts = () => {
    let userStores = [];
     stores.map((store) => { 
      currentUser.storeIds.map((storeId) => {
        if(storeId === store._id){
          userStores.push(store)
        }
      })
    })
    setContacts(userStores);   
   }

  
  useEffect(() => {
    // navigateToLogin()
    getContacts()
  }, [currentUser])


  // const navigateToLogin = async () => {
  //   if(!currentUser){
  //     navigate('/needLogin')
  //   }
  // }



  useEffect(() => {
    if (currentUser) {
      socket.current = io('http://localhost:8000');
      socket.current.emit('add-user', currentUser._id);
    }
  }, [currentUser])

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

