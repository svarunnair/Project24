import { Button, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import zomato from '../Assets/zomato.mp4'



function WelcomePage() {


    const navigate=useNavigate()

    const handleEmail=()=>{
        navigate('/signup')
    }
    const handleGoogle=()=>{
        navigate('/google')
    }
  return (
    <div className='main'>
    <div className='overlap'></div>
    <video src={zomato} autoPlay loop muted/>
    <div  className="content">
      <Text  fontSize={40} fontFamily={"revert-layer"}>Zomato</Text>
      <Text fontSize={50} fontFamily={'Brush Script MT'} textColor={'red'} marginBottom={100}>Find the best restaurants, cafes and bars in India</Text>
        <Button color={'green'} onClick={handleEmail}>Signup with Emanil</Button><br/>
        <Button color={'green'} onClick={handleGoogle}>Signup with Google account</Button>
        </div>
    </div>
  )
}

export default WelcomePage