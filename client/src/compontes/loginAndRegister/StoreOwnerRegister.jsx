import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Demo from './Demo';

export default function StoreOwnerRegister() {
  const navigate = useNavigate();

  // states for email and password inputs
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const singIn = async (e) => {
    e.preventDefault();
    console.log(`${registerEmail} ${registerPassword}`);
    const user = await axios.post('http://localhost:8000/api/ownerStore', {
      email: registerEmail,
      password: registerPassword,
    });
    console.log(user);
    if (user) navigate('/ownerlogin');
  };
  return (
    <div>
      <Demo
        email={setRegisterEmail}
        password={setRegisterPassword}
        loginFun={singIn}
        btnText={'Sing Up'}
        linkDisplay={'none'}
      />
    </div>
  );
}
