import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Dropdown } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Contacts({ contacts, currentUser, changeChat }) {
    const navigate = useNavigate()
    const { store } = useSelector(state => state.ownerStore)
    const [currentFirstName, setCurrentFirstName] = useState('');
    const [currentLastName, setCurrentLastName] = useState('');
    const [currentUserImage, setCurrentUserImage] = useState('https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNxi_LSue-6sEnjrB1XMp_4hmhchFOWcEykGA51eC_RMQ_sYJHf_QaNVPnHk2zOaTHoZCgaLQok2o-5QF_XuVShzKMklKjlW2_9YqWV9O-ITeAa4Lht7v1cQ&usqp=CAc');
    const [currentSelected, setCurrentSelected] = useState(undefined);

    // console.log(currentUser);
    console.log(store);
    const userOrOwner = () => {
        if (currentUser?.role === 'owner') {
            console.log(currentUser);
            setCurrentFirstName(store.name)
            setCurrentUserImage(store.darklogo.url)
            setCurrentLastName('')
        } else {
            console.log(currentUser);
            setCurrentUserImage(currentUser?.profileImage);
            setCurrentFirstName(currentUser?.firstName);
            setCurrentLastName(currentUser?.lastName);

        }
    }

    

    useEffect(() => {
        userOrOwner()
    }, [currentUser])


    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
    };

    console.log(contacts);
    return (
        <div>
            <div className='flex md:hidden w-full justify-center'>
                <Dropdown className='w-full' label="חברים" style={{width:'320px'}}>
                    <Dropdown.Header className='' style={{width:'320px'}}>
                        <div className='flex h-[20px] items-center justify-between w-full mb-3'>
                            <div className=''>
                                <h3 className="block text-sm">{currentFirstName} {currentLastName}</h3>
                            </div>
                            <div className='rounded-full'>
                                <img className='rounded-full w-full object-cover w-12 h-12 rounded-full' src={currentUserImage} alt="" />
                            </div>
                        </div>
                    </Dropdown.Header>
                    {contacts.map((contact, index) => {
                        return (
                            <div className=''>
                                <Dropdown.Item key={contact._id} onClick={() => changeCurrentChat(index, contact)}>
                                    <div className="flex overflow-hidden items-center px-4 py-2 justify-center text-sm transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none">
                                        <span className="contact-name block ml-2 font-semibold  p-4">{contact.name} {contact.firstName} {contact.lastName}</span>
                                    </div>
                                </Dropdown.Item>
                                 <Dropdown.Divider />
                            </div>
                        )
                    })}
                     <Dropdown.Divider />
                    <Dropdown.Item>
                        <h3 onClick={() => {navigate('/')}}>Back to home page</h3>
                    </Dropdown.Item>
                </Dropdown>    
            </div>
            <div className='hidden md:flex items-end flex flex-col justify-between border-r-2 '>
                <div className="owners-chat rounded">    
                    <ul className="overflow-auto h-[0] md:h-[562px] w-full">
                        <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600 text-center border-b-2 h-[74px] font-semibold ">הודעות</h2>
                        {contacts.map((contact, index) => {
                            return (                 
                                <div className='w-[250px]'>     
                                    <li key={contact._id} className='contact ml-2 overflow-hidden cursor-pointer hover:bg-gray-100 focus:outline-none h-[60px]' onClick={() => changeCurrentChat(index, contact)}>
                                        <div className="flex text-sm items-center justify-end transition duration-150 ease-in-out border-gray-300">
                                            <span className="contact-name block ml-2 font-semibold  text-gray-600">{contact.name} {contact.firstName} {contact.lastName}</span>
                                            <img className="object-cover w-12 h-12 rounded-full" src={contact.profileImage} alt="" />
                                        </div>
                                    </li>
                               <Dropdown.Divider />
                                </div>

                            )
                        })}            
                    </ul>        
                </div>
                <div className="current-user border-t w-full flex items-center px-4 py-2 justify-end text-sm transition duration-150 ease-in-out border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                    <h2 className='contact-name block ml-2 font-semibold  text-gray-600'>{currentFirstName} {currentLastName}</h2>
                    <div className='object-cover mt-2 w-12 h-12 flex'>
                        <img className="w-full rounded-full" src={`${currentUserImage}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}    
    