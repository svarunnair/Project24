// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getData } from '../redux/data/action'
// import { Grid } from '@chakra-ui/react'

// function Select() {

//     const mainData=useSelector((store)=>store.data.data)
//     const dispatch=useDispatch()

//     console.log("mainData",mainData)

//     useEffect(()=>{
//         dispatch(getData())
//     },[])
    
//   return (
//     <div>Select
//         <Grid>
//             {mainData.map((item)=>(
//                 <>
//                 {item.item}
//                 </>
//             ))}
//         </Grid>
//     </div>
//   )
// }

// export default Select




import {
  Box,
  Center,
  
  Heading,
  Text,
  Stack,
  Image,
  Img,
  Button,
  Grid,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, patchData, postCart } from '../redux/data/action'
import { useNavigate } from 'react-router-dom'





export default function List() {

    const mainData=useSelector((store)=>store.data.data)
    const dispatch=useDispatch()
    const [count,setCount]=useState(1)
    const navigate =useNavigate()
    

  

    console.log("mainData",mainData)

    useEffect(()=>{
        dispatch(getData())
    },[])


    const handleCart=(item)=>{
      dispatch(postCart(item))
    }

    const handleCartNavigate=()=>{
      navigate('/cart')
    }
  return (


    <>
    <Button marginLeft={1100} onClick={handleCartNavigate}>Cart</Button>
    {mainData.map((item)=>(
        <>
        

        <Center  py={12}>
      <Box 
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
            <Img borderRadius={15} src={item.image}/>
          
        </Box>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
           {item.item}
          </Heading>

          {/* <Grid><Button onClick={()=>addCount(item.quant,item.id)}>add</Button>Quantity : {item.quant}<Button onClick={()=>reduceCount(item.quant,item.id)} >reduce</Button></Grid> */}
       
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            
          </Text>
          
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
             Rs {item.price}/-
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              
            </Text>
          </Stack>
        </Stack>
        <Button onClick={()=>handleCart(item)} bg={'green'} color={'yellow.200'}>Add to cart</Button>
      </Box>
    </Center>
        
        






        </>
    ))}
    
    
   
    

    </>
  )
}