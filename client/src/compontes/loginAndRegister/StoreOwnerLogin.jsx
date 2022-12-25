import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../features/user/userSlice';
import Demo from './Demo';

export default function StoreOwnerLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states for email and password inputs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // login function
  const login = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:8000/auth/login', {
      email: loginEmail,
      password: loginPassword,
    });
    dispatch(getUser(data));

    const history = sessionStorage.getItem('history');
    const url = history.split('').slice(21).join('');
    console.log(data);
    if (data) navigate(`${url}`);
  };
  return (
    <div>
      <Demo
        email={setLoginEmail}
        password={setLoginPassword}
        loginFun={login}
        //   singInWithGoogle={singInWithGoogle}
        btnText={'Sing In'}
        linkDisplay={"none"}
        ownerDisplay={'none'}
        nameDisplay={"hidden"}
      />
    </div>
  );
}
