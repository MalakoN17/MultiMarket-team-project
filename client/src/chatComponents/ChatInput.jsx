import React, { useState } from 'react'
import Picker from 'emoji-picker-react';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';

export default function ChatInput({ handleSendMsg }) {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState('');

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (event, emojiObject) => {
        console.log(emojiObject);
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
                <div className=''>
                    <button onClick={handleEmojiPickerHideShow}>
                        <MoodIcon/>
                    </button>
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </div>
                <form className="input-container justify-between items-center flex w-[94%]" onSubmit={(e) => { sendChat(e) }}>
                    <input type="text"
                        placeholder="type your message here"
                        onChange={(e) => setMsg(e.target.value)}
                        className="block py-3 pl-4  bg-gray-100 w-full p-4 rounded-full outline-none focus:text-gray-700"
                        name="message" required
                        value={msg} />
                    <button className='mr-5' type="submit">
                        <SendIcon/>
                    </button>
                </form>
            </div>
        </div>
    );
}