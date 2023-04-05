import React, { useState } from 'react'

function Login() {
        const[userData,setUser]=useState()
return (

        <form>
<label>email</label>
        <input type ="email" placeholder="enter your email" onChange={(e)=>{
        setUser({...userData,email:e.target.value})}}></input>
        <label>password</label>
        <input type ="password" placeholder="enter your password" onChange={(e)=>{
        setUser({...userData,password:e.target.value})}}></input>
         </form>
    
  )
}

export default Login
