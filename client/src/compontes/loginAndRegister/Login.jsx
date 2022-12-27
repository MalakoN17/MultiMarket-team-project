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
    const  {data}  = await axios.post('http://localhost:8000/auth/login', {
      email: loginEmail,
      password: loginPassword,
    });

    // const history = sessionStorage.getItem('history');
    // const url = history.split('').slice(21).join('');
    if (data){
      dispatch(getUser(data));
      navigate("/")
      console.log("pass");
    }else{
      console.log('fail');
      dispatch(loginFailure())
    }
    
  };

  return (
    <div>
      <ToastContainer />
      <Demo
        email={setLoginEmail}
        password={setLoginPassword}
        loginFun={login}
        //   singInWithGoogle={singInWithGoogle}
        btnText={'Sing In'}
        nameDisplay={"hidden"}
      />
      
    </div>
  );
}
