import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../features/user/userSlice';
import Demo from './Demo';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states for email and password inputs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // login function
  const login = async (e) => {
    e.preventDefault();
    const  {data}  = await axios.post('http://localhost:8000/api/auth/login', {
      email: loginEmail,
      password: loginPassword,
    });
    dispatch(getUser(data));

    const history = sessionStorage.getItem('history');
    const url = history.split('').slice(21).join('');
    if (data) navigate(`${url}`);
  };

  // login with google
  const singInWithGoogle = async ()=>{
    window.open("http://localhost:8000/auth/google", "_self");
    // const {data} = await axios.get('http://localhost:8000/auth/login/success', {
    //       withCredentials:true,
    //   })
    //   dispatch(getUser(data))
  }

  // login with facebook
  const singInWithFacebook = async ()=>{
    window.open("http://localhost:8000/auth/facebook", "_self");
    // const {data} = await axios.get('http://localhost:8000/auth/login/success', {
    //       withCredentials:true,
    //   })
    //   dispatch(getUser(data))
  }

  return (
    <div>
      <Demo
        email={setLoginEmail}
        password={setLoginPassword}
        loginFun={login}
        singInWithGoogle={singInWithGoogle}
        singInWithFacebook={singInWithFacebook}
        btnText={'Sing In'}
        nameDisplay={"hidden"}
      />
    </div>
  );
}
