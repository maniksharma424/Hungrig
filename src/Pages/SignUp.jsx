import React from 'react'
import { Users } from '../Backend/UsersData'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
export const SignUp = () => {
const [user,setUser] = useState('')
const [pass,setPass] = useState('')
const [userCreated,setUserCreated] = useState(false)
  return (
    <>
        <h1>Create New Account</h1>
        <p>Username<input placeholder='create username' value={user} onChange={(e)=>{setUser(e.target.value)}}></input></p>
        <p>Password<input placeholder='create password' value={pass} onChange={(e)=>{setPass(e.target.value)}}></input></p>
        <button onClick={()=>{Users.push({"Username":user,"password":pass})
        setUserCreated(true)

        }}>Create account</button>
        {userCreated && <Navigate to='/home'></Navigate>}
    </>
  )
}
