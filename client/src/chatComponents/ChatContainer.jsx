import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import axios from 'axios';
import { useRef } from 'react';         
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { Dropdown } from 'flowbite-react';

export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentFirstName, setCurrentFirstName] = useState(null);
  const [currentUserImage, setCurrentUserImage] = useState('https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNxi_LSue-6sEnjrB1XMp_4hmhchFOWcEykGA51eC_RMQ_sYJHf_QaNVPnHk2zOaTHoZCgaLQok2o-5QF_XuVShzKMklKjlW2_9YqWV9O-ITeAa4Lht7v1cQ&usqp=CAc');
  const [currentLastName, setCurrentLastName] = useState(null);

  const scrollRef = useRef();

  const {store} = useSelector(state=>state.ownerStore)   

  const getMessages = async () => {
    if (currentChat) {
      const response = await axios.post(
        'http://localhost:8000/api/messages/getMsg', {
        from: currentUser._id,    
        to: currentChat._id,
      });
      setMessages(response.data);
    }
  };

  useEffect(() => {
    getMessages();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    // console.log(msg);
    await axios.post('http://localhost:8000/api/messages/addMsg', {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit('send-msg', {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);     
  };

  const userOrOwner = () => {            
    if(currentUser?.role === 'owner'){       
        console.log(currentUser);
        setCurrentFirstName(store.name)
        setCurrentUserImage(store.darklogo.url)    
        setCurrentLastName('')      
    }else{
        console.log(currentUser);        
        setCurrentUserImage(currentUser?.profileImage);
        setCurrentFirstName(currentUser?.firstName);
        setCurrentLastName(currentUser?.lastName);

    }      
}  


//   const userOrOwner = () => {   
//     if (currentUser?.role === 'owner') {
//       setCurrentFirstName(store.name)
//       setCurrentUserImage(store.darklogo.url)
//     } else {
//       console.log(currentUser);
//     }
//   }


    
// useEffect(() => {
//   userOrOwner()    
// }, [])

useEffect(() => {
  if (socket.current) {
    socket.current.on('msg-receive', (msg) => {
      setArrivalMessage({ fromSelf: false, message: msg });
    })   
  }
}, [])

useEffect(() => {
  arrivalMessage && setMessages((prev) => [...prev, arrivalMessage])
}, [arrivalMessage])
               
useEffect(() => {
  scrollRef.current?.scrollIntoView({ behavior: "smooth" })
}, [messages])


return (
  <div className='chat-container flex-col w-full'>
    <div className='w-full flex flex-col'>
      <div className="chat-nav flex items-center justify-end p-3 border-b-2">
        <span className="contact-name block ml-2 font-bold text-gray-600">{currentChat?.firstName} {currentChat?.lastName}</span>
        <div className='object-cover mt-2 w-12 h-12 flex'>
        <img className="object-cover w-10 h-10 rounded-full w-full"    
          src={`${currentUserImage}`}
          alt="" />
          </div>
      </div>
      <div className="msg-container relative w-full overflow-y-auto flex flex-col h-[30rem]">
        {messages.map((message, index) => {
          return (
            message.fromSelf ? (
              <div className='' ref={scrollRef} key={index}>
                <div className='my-3 flex'>
                  <span className='bg-lime-400 px-3 py-2 text-lg rounded-md mr-3'>{message.message}</span>
                </div>
              </div>
            ) :
              (
                <div ref={scrollRef} key={uuidv4}>
                  <div className='my-3 flex justify-end'>
                    <span className='bg-zinc-100 px-3 py-2 text-lg rounded-md ml-3'>{message.message}</span>
                  </div>
                </div>
              )
          )
        })}
      </div>
      <div className="chat-input-container h-1/4" style={{ height: '10%' }}>
        <ChatInput handleSendMsg={handleSendMsg} />
      </div>
    </div>
  </div>
);
}
