import React from 'react'
import { Users } from '../Backend/UsersData'
import { useState } from 'react'
import {Navigate,Link } from 'react-router-dom'

const Login = ()=> {
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [loggedIn,setLoggedIn] = useState(false)

  return (
    <>
    <h1>Login</h1>
        <p>UserName<input value={username} placeholder='Enter Username' onChange={(e)=>{setUsername(e.target.value)}}></input></p>
        <p>Password<input value={password} placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}></input></p>
        <Link to='/signup'>NewUser create an account</Link>
       <button onClick={()=>{
          Users.map(user=>{
          //   {user.Username === username && user.password === password ?
          //   (setLoggedIn(true)):(alert('wrong credintials'))
          // }
          if(user.Username === username && user.password === password){
            setLoggedIn(true)
          }
          else{
            alert('wrong')
          }
          })
        }}>log in</button>

        { loggedIn && <Navigate to='/home'></Navigate>}
    </>
  )
}

export default Login