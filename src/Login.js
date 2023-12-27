import React, { useState } from 'react';

import Axios from "axios";

import { useNavigate } from 'react-router-dom';


function Login() {


    const[username , setUsername] = useState(" ");

    const[password , setPassword] = useState(" ");

    let solaris = useNavigate();

   const sendtodb = (e) =>{
        e.preventDefault();
        console.log(username , password);

        Axios.post("https://64e9d781bf99bdcc8e670406.mockapi.io/React_js" , {
            name : username ,
            pswd : password ,
            
        });
        

        alert("account created successfully");

        solaris("/banner");

       
    };
  return (
    <div>
        <h1 className='display-5 '>Login page 123</h1>

        <form className='mx-auto w-25' onSubmit={sendtodb}>

            <label className='p-2'>username</label>
            <input className='form-control border border-2' type='text' required placeholder='Ex:albert' onChange={(e)=>setUsername(e.target.value)}></input>

            <label className='p-2'>password</label>
            <input className='form-control border border-2' type='password' required onChange={ (e)=>setPassword(e.target.value)}></input>

            <button className='btn btn-success mt-4 mx-auto d-flex' type='submit'>sign up</button>
        </form>
    </div>
  )
}

export default Login
