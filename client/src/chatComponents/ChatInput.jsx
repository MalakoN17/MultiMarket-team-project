import React, { useState } from 'react'
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs'


export default function ChatInput({ handleSendMsg }) {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState('');

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (event, emojiObject) => {
        let message = msg;
        message += emojiObject.emoji;
        setMsg(message);
    };

    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg('')
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <div className='w-[6%]'>
                    <button onClick={handleEmojiPickerHideShow}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                </button>
                </div>
                <form className="input-container justify-between items-center flex w-[94%]" onSubmit={(e) => { sendChat(e) }}>
                    <input type="text"
                        placeholder="Message"
                        onChange={(e) => setMsg(e.target.value)}
                        className="block py-3 pl-4  bg-gray-100 w-full p-4 rounded-full outline-none focus:text-gray-700"
                        name="message" required
                        value={msg} />
                    <button type="submit">
                        <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}



{/* <div className="button-container">            
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>  
      </div>  
      <form className="input-container" onSubmit={(e) => {sendChat(e)}}>
        <input id='messageBox'
          type="text"
          placeholder=""
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />  
        <button type="submit">
          <IoMdSend />
        </button>      
      </form> */}
