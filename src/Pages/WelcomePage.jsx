import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {

    const navigate=useNavigate()

    const handleEmail=()=>{
        navigate('/signup')
    }
    const handleGoogle=()=>{
        navigate('/google')
    }
  return (
    <div>WelcomePage<br/>

        <Button onClick={handleEmail}>Signup with Emanil</Button><br/>
        <Button onClick={handleGoogle}>Signup with Google account</Button>
    </div>
  )
}

export default WelcomePage