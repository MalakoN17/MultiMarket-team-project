import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import axios from 'axios';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  const getMessages = async () => {
    console.log(currentChat?._id);
    if (currentChat) {
      const response = await axios.post(
        'http://localhost:5000/api/messages/getMsg',
        {
          from: currentUser._id,
          to: currentChat._id,
        }
      );
      setMessages(response.data);
    }
  };

  useEffect(() => {
    getMessages();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post('http://localhost:5000/api/messages/addMsg', {
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

  useEffect(() => {
    if (socket.current) {
      socket.current.on('msg-receive', (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='chat-container columns-2 flex-col'>
      <div className='w-full'>
      <div className="chat-nav border-green-500 border-4 relative flex items-center p-3 border-b border-gray-300">
                        <img className="object-cover w-10 h-10 rounded-full"
                            src={currentUser?.profileImage}
                            alt="username" />
                        <span className="contact-name block ml-2 font-bold text-gray-600">{currentUser?.firstName}</span>
                        <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                        </span>
                    </div>
      <div className="msg-container border-red-500 border-4 relative w-full p-6 overflow-y-auto h-[40rem]">
        {messages.map((message) => {
          return (
            <ul className="space-y-2" ref={scrollRef} key={uuidv4()}>
              <div
                classNameName={`message ${
                  message.fromSelf ? (
                    <li className="flex justify-start">
                      <div className="owner-msg relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                        <span className="block">{message.fromSelf}</span>
                      </div>
                    </li>
                  ) : (
                    <li className="coustomer-msg flex justify-end">
                      <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                        <span className="block">{message}</span>
                      </div>
                    </li>
                  )
                }`}
              >
                <div className="content">
                  <li>{message.message}</li>
                </div>
              </div>
            </ul>
          );
        })}
        <div className="chat-input-container" style={{ height: '10%' }}>
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      </div>
      </div>
    </div>
  );
}
// <div
//   className="chat-container d-flex flex-column mt-md-0 overflow-hidden"
//   style={{ height: '100%' }}
// >
//   <div
//     className="chat-header d-flex justify-content-between mt-md-0"
//     style={{ height: '10%' }}
//   >
//     <div className="user-details">
//       <div className="profileImage">
//         <img className="ms-3 ms-md-3 rounded-3" src={``} alt="avatar" />
//       </div>
//       <div className="username">
//         {/* <h3>{currentChat.firstName}</h3> */}
//       </div>
//     </div>
//     <div className="logout d-none d-md-flex align-items-center"></div>
//   </div>
//   <div className="chat-messages" style={{ height: '80%' }}>
//     {messages.map((message) => {
//       return (
//         <div ref={scrollRef} key={uuidv4()}>
//           <div
//             className={`message ${
//               message.fromSelf ? 'sended' : 'received'
//             }`}
//           >
//             <div className="content">
//               <p>{message.message}</p>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
//   <div className="chat-input-container" style={{ height: '10%' }}>
//     <ChatInput handleSendMsg={handleSendMsg} />
//   </div>
// </div>
