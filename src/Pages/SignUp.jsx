import React from 'react'
import { Users } from '../Backend/UsersData'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ShimmerSimpleGallery } from "react-shimmer-effects";
export const SignUp = () => {
const [user,setUser] = useState('')
const [pass,setPass] = useState('')
const [userCreated,setUserCreated] = useState(false)
return <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />;
}
