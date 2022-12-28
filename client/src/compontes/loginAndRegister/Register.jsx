import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Demo from './Demo';

export default function Register() {
  const navigate = useNavigate();

  // states for email and password inputs
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const singIn = async (e) => {
    e.preventDefault();
    // console.log(`${registerEmail} ${registerPassword}`);
    const user = await axios.post('http://localhost:8000/auth/register', {
      firstName:registerFirstName,
      lastName:registerLastName,
      phone:registerNumber,
      email: registerEmail,
      password: registerPassword,
    });
    // console.log(user);
    if (user) navigate('/login');
  };

  return (
    <div>
      <Demo
        firstName={setRegisterFirstName}
        lastName={setRegisterLastName}
        phoneNumber={setRegisterNumber}
        email={setRegisterEmail}
        password={setRegisterPassword}
        loginFun={singIn}
        btnText={'Sing Up'}
        linkDisplay={'none'}
        nameDisplay={"flex  flex-col mb-4"}
             />
   </div>
  );
}
