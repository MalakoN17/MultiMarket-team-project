import React, { useState, useEffect } from 'react';

export default function Contacts({ contacts, currentUser, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.profileImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };

    return (

        <div>
            <div className="owners-chat border-blue-500 border-4">
                {/* {currentUserImage && currentUserName && ( */}
                <ul className="overflow-auto h-[32rem]">
                    <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
                    {contacts.map((contact, index) => {
                        <li key={contact._id} className={` border-pink-500 border-4 contact overflow-hidden ${index === currentSelected ? 'selected' : ''
                    }`} onClick={() => changeCurrentChat(index, contact)}
                        >
                            <a
                                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                                <img className="object-cover w-10 h-10 rounded-full" src={contact?.profileImage} alt="profile image" />
                                <div className="w-full pb-2">
                                    <div className="flex justify-between">
                                        <span className="contact-name block ml-2 font-semibold text-gray-600">{contact.firstName}</span>
                                        <span className="time-update block ml-2 text-sm text-gray-600">{}</span>
                                    </div>
                                    <span className="last-message block ml-2 text-sm text-gray-600">{}</span>
                                </div>
                            </a>
                        </li>
                    })}
                </ul>
                {/* )} */}
            </div>
        </div>
    );
}
{/* <div className="d-none d-md-flex">
    {currentUserImage && currentUserName && (
        <div>
            <div className="contacts">
                {contacts.map((contact, index) => {
                    return (
                        <div
                            key={contact._id}
                            className={`contact overflow-hidden ${index === currentSelected ? 'selected' : ''
                                }`}
                            onClick={() => changeCurrentChat(index, contact)}
                        >
                            <div className="avatar">
                                <img
                                    src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                                    alt=""
                                />
                            </div>
                            <div className="username">
                                <h3 className="">{contact.username}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="current-user">
                <div className="avatar">
                    <img
                        src={`data:image/svg+xml;base64,${currentUserImage}`}
                        alt="avatar"
                    />
                </div>
                <div className="username">
                    <h2>{currentUserName}</h2>
                </div>
            </div>
        </div>
    )}
</div> */}
