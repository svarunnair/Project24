import { Button } from '@chakra-ui/react'
import { signInWithPopup } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, provider } from './firebase'
import Home from '../Home'
import SideBar from '../SideBar/SideBar'

function GoogleAccount() {
    const [value,setValue]=useState()

    const handleClick=()=>{
        signInWithPopup(auth,provider)
        .then((data)=>{
            console.log('dataa',data)
            setValue(data.user.email)
            localStorage.setItem('email',data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    },[])
  return (
    <div>
        {/* Signup <br/>
        <div></div> */}
        {value?<SideBar/>:<Button onClick={handleClick}> Signup with Google account</Button>
        }
        
    </div>
  )
}

export default GoogleAccount