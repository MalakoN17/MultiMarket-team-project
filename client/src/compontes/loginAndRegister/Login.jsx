import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getUser} from "../../features/user/userSlice"
import Demo from './Demo'


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   // states for email and password inputs
   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");

  // login function
    const login = async (e)=>{
      e.preventDefault();
      // console.log(`${loginEmail} ${loginPassword}`);
      const {data} = await axios.post("http://localhost:8000/auth/login", {email:loginEmail, password:loginPassword})
        // console.log(data);
        dispatch(getUser(data.currentUser));
        if (data) {sessionStorage.setItem("currentUser", JSON.stringify(data)); navigate("/")}
        // if (user.data) navigate("/");
    }

  return (
    <div>
        <Demo
          email={setLoginEmail}
          password={setLoginPassword}
          loginFun={login}
        //   singInWithGoogle={singInWithGoogle}
          btnText={"Sing In"}
        />
    </div>
  )
}
