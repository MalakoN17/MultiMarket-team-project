import React from 'react'
import Demo from './Demo'


export default function Login() {

    const login = ()=>{
        console.log("login");
    }

  return (
    <div>
        <Demo
        //   email={setLoginEmail}
        //   password={setLoginPassword}
          loginFun={login}
        //   singInWithGoogle={singInWithGoogle}
          btnText={"Sing In"}
        />
    </div>
  )
}
