import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, loginFailure, loginStart, removeUser } from '../../features/user/userSlice';
import { ToastContainer } from 'react-toastify';
import Demo from './Demo';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states for email and password inputs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // login function
  const login = async (e) => {
    // dispatch(loginStart())
    e.preventDefault();
    const  {data}  = await axios.post('http://localhost:8000/api/auth/login', {
      email: loginEmail,
      password: loginPassword,
    });

     
    if (data){
      dispatch(getUser(data));
      navigate('/')
      console.log("pass");
    }else{
      console.log('fail');
      dispatch(loginFailure())
    }
    
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
      <ToastContainer />
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
