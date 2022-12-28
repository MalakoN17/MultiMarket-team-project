import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Contacts from '../chatComponents/Contacts';
import Welcome from '../chatComponents/Welcome';
import ChatContainer from '../chatComponents/ChatContainer';
import { io } from 'socket.io-client';   
import Footer from '../compontes/footer/Footer';
import DesktopNav from '../compontes/navbar/DesktopNav';                
import { useSelector } from 'react-redux';        

export default function Chat() {             
  const socket = useRef();
  const navigate = useNavigate();     
  const [contacts, setContacts] = useState([]);       
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [storeOwners, setStoreOwners] = useState([]);
  const [users, setUsers] = useState([]);

  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {       
    setCurrentUser(user.user.currentUser);
  }, []);

  const getStoreOwners = async () => {
    const data = await axios.get('http://localhost:8000/api/ownerStore');
    setStoreOwners(data.data);
  };

  const getUsers = async () => {
    const data = await axios.get('http://localhost:8000/api/user');
    setUsers(data.data);
  };                    
                          
  const getContacts = () => {
    if (currentUser?.role === 'owner') {
      setContacts(users);
    } else {
      setContacts(storeOwners)     
    }          
  }        

  const needToLogin = () => {
    if(!user){                 
      navigate('/needLogin')    
    }
  }
  useEffect(() => {
    if (currentUser) {
      socket.current = io('http://localhost:8000');
      socket.current.emit('add-user', currentUser._id);
    }
  }, [currentUser]);      
   
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };     


  useEffect(() => {
    getContacts();         
    getUsers();
    needToLogin()
    getStoreOwners();    
  }, [currentUser]);    
     
  return (
    <div className="">
      <DesktopNav />                   
      <div className="bg-neutral-100 w-full p-10 ">
        <div className="w-full md:w-3/4 mx-auto">
          <div className="md:flex flex-col min-w-full border rounded bg-white shadow-2xl md:flex-row-reverse">
            <Contacts
              contacts={contacts}               
              currentUser={currentUser}
              changeChat={handleChatChange}
            />
            {currentChat === undefined ? (            
              <Welcome currentUser={currentUser} />
            ) : (
              <ChatContainer       
                currentChat={currentChat}
                currentUser={currentUser}
                socket={socket}
              />    
            )}
          </div>              
        </div>
      </div>           
      <Footer/>                  
    </div>
  );
}
