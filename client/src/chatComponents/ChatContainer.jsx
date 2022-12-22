import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import axios from 'axios';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Messages from './Message';

export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  console.log('chat - ', currentChat?._id);
  console.log('user - ', currentUser?._id);

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

  console.log(messages);

  useEffect(() => {
    getMessages();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
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
    console.log(msg);
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if(socket.current){
      socket.current.on('msg-receive', (msg) => {
        setArrivalMessage({fromSelf: false, message: msg});
      })
    }
  },[])

  useEffect(() => {
   arrivalMessage && setMessages((prev) => [...prev, arrivalMessage])
  },[arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  },[messages])


  return (
    <div className='chat-container flex-col w-full'>
      <div className='w-full flex flex-col'>
        <div className="chat-nav flex items-center justify-end p-3 border-b-2">
          <span className="contact-name block ml-2 font-bold text-gray-600">{currentChat?.name}</span>
          <img className="object-cover w-10 h-10 rounded-full"
            src={currentChat?.logo}
            alt="username" />
        </div>
        <div className="msg-container relative w-full overflow-y-auto flex flex-col justify-between h-[30rem]">
          {messages.map((message, index) => {
            return(
              message.fromSelf ? (
                <div ref={scrollRef} key={index}>
                <div className='bg-red-500' >
                  <p>{message.message}</p>
                </div>
                </div>
              ) :
                (
                  <div ref={scrollRef} key={uuidv4}>
                  <div className='bg-green-500'>
                    <p>{message.message}</p>
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
