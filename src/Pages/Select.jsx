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
  Input,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, patchData, postCart } from '../redux/data/action'
import { useNavigate, useParams } from 'react-router-dom'





export default function List() {

    const mainData=useSelector((store)=>store.data.data)
    const dispatch=useDispatch()
    // const [count,setCount]=useState(1)
    const navigate =useNavigate()
    const [hover,setHover]=useState("90%")
    const [search,setSearch]=useState([])
    const params = useParams()

    console.log("paramss",params)

    const handleOver=()=>{
      setHover("100%")
    }
    const handleLeave=()=>{
      setHover("90%")
    }

    // let params = new URL(document.location).searchParams;
    // let name = params.get("name"); // is the string "Jonathan Smith".
    // let age = parseInt(params.get("age")); // is the number 18
    

    // const paramsData=searchParams.get(value)

    // const dataParams=new URLSearchParams()
    // // dataParams.set('data',value)
    // const url="http://localhost:8000/data"

    
    console.log("mainData",mainData)

    useEffect(()=>{
        dispatch(getData())
    },[])


    const handleCart=(item)=>{
      item.paymentDone = false
      dispatch(postCart(item))
    }

    const handleCartNavigate=()=>{
      navigate('/cart')
    }

    

    const handleSearch=(e)=>{
      let value=e.target.value 
      // let paramsData=params.value
      
    
      const sortData = mainData.filter(item => item.item.toLowerCase().includes(value.toLowerCase()));
    // const sortData=mainData.filter((item)=>{return item.item.toLowerCase()===value.toLowerCase()})
      setSearch(sortData)
     

      
    }
    // let params = new URL(document.location).searchParams;


    useEffect(()=>{
      setSearch(mainData)
    },[mainData])

    const handleBurger=()=>{
     let sortBurger=mainData.filter((item)=>{
        return item.item==="Burger"
      })
      setSearch(sortBurger)
    }


    const handleSortHtoL=()=>{
      let sortData=mainData.sort((a,b)=>{
        return (b.price-a.price) 
      })
      setSearch(sortData)
    }

    const handleLtoH=()=>{
      let sortData=mainData.sort((a,b)=>{
        return (a.price-b.price)

      })
      setSearch(sortData)
    }

  return (


    <>
   
    <Input onChange={handleSearch} placeholder='search food'/>
    <Button fontFamily={'serif'} onClick={handleBurger}>Burger</Button>
    <Button  fontFamily={'serif'} onClick={handleSortHtoL}>Sort H to L</Button>
    <Button fontFamily={'serif'} onClick={handleLtoH}>Sort L to H</Button>

    {search.map((item)=>(
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
            <Img onMouseOver={()=>handleOver(item.id)} onMouseLeave={()=>handleLeave(item.id)} 
           
             cursor={'pointer'} borderRadius={15} src={item.image}/>
          
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
        <Button  
            onClick={()=>handleCart(item)} bg={'green'} color={'yellow.200'}>Add to cart</Button>
      </Box>
    </Center>
        
        



        </>
    ))}
    
    
   
    

    </>
  )
}