import React, { useState, useEffect } from 'react';

export default function Contacts({ contacts, currentUser, changeChat }) {
    const [currentFirstName, setCurrentFirstName] = useState(undefined);
    const [currentLastName, setCurrentLastName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    
    console.log(currentUser);
    
    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.profileImage);
            setCurrentFirstName(currentUser.firstName);
            setCurrentLastName(currentUser.lastName);
        }
    }, [currentUser]);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };


    return (

        <div className='w-[20] items-end flex flex-col justify-between border-r-2 '>
            <div className="owners-chat rounded">
                {/* {currentUserImage && currentUserName && ( */}
                <ul className="overflow-auto h-[33rem] w-full">
                    <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600 text-center border-b-2 h-[11%] font-semibold ">הודעות</h2>
                    {contacts.map((contact, index) => {
                        return(
                        <li key={contact._id} className='contact overflow-hidden' 
                        onClick={() => changeCurrentChat(index, contact)}>
                            <div className="flex items-center px-4 py-2 justify-end text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                                <span className="contact-name block ml-2 font-semibold  text-gray-600">{contact.name}</span>
                                <img className="object-cover w-12 h-12 rounded-full" src={contact.logo} alt="profile image" />
                            </div>
                        </li>
                        )
                    })}
                </ul>
                {/* )} */}
            </div>
            <div className="current-user border-t w-full flex items-center px-4 py-2 justify-end text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                <h2 className='contact-name block ml-2 font-semibold  text-gray-600'>{currentFirstName} {currentLastName}</h2>
                <img className="object-cover mt-2 w-12 h-12 rounded-full" src={currentUserImage} alt="avatar"/>
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
