// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCart } from '../redux/item/action'

// function Cart() {

//     const cartData=useSelector((store)=>store.data.getCart)
//     const dispatch=useDispatch()

//     console.log("cartData",cartData)

//     useEffect(()=>{
//         dispatch(getCart())
//     },[])
//   return (
//     <div>Cart.
//         <>
//         {cartData.map((item)=>(
//             <>

//             {item.item}

//             </>
//         ))}
//         </>
        
//     </div>
//   )
// }

// export default Cart







import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  
  Icon,
  chakra,
  Tooltip,
  Grid,
  Button,
  Text,
  Input,
  Img,
  styled,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, patchData } from '../redux/data/action'

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}


function Rating({ rating, numReviews } ) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function Cart() {

        const cartData=useSelector((store)=>store.data.getCart)
        const dispatch=useDispatch()
        const [totalAmount,setTotalAmount]=useState(0)
    
        console.log("cartData",cartData)
    
        useEffect(()=>{
            dispatch(getCart())
        },[])
        


        const handleAdd=(quant,id)=>{
            let data={
                quant:quant+1
            }
            dispatch(patchData(data,id))
        }

        const handleReduce=(quant,id)=>{
            if(quant>=2){
                let data={
                    quant :quant-1
                }
                dispatch(patchData(data,id))
            }
            else{
                quant=1
            }
        }

        useEffect(()=>{

          const total=cartData?.reduce((acc,item,index)=>{
            return acc+item.price*item.quant
        },0)

        
          setTotalAmount(total)
        },[cartData])

        
        const handleCoupon=(e)=>{
          let value=e.target.value 
          if(value==="COUPON"){ 
            setTotalAmount(totalAmount-100)
          }
         
        }


    
  return (

<>

{cartData.map((item)=>(
    <Grid  >
    
    <Flex  p={50} w="full" alignItems="center" justifyContent="center">
      <Box 
        bg={('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {item.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={item.image} alt={`Picture of ${item.name}`} roundedTop="lg" />
        <Text color='grey'>{item.item}</Text>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {item.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {item.name}
            </Box>
            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip> */}
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            {/* <Rating rating={item.rating} numReviews={item.numReviews} /> */}
            <Grid><Button width={10} color={'green.300'} onClick={()=>handleAdd(item.quant,item.id)}>+</Button>Quantity : {item.quant}<Button  width={10} color={'green.300'} onClick={()=>handleReduce(item.quant,item.id)}>-</Button></Grid>
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.500'} fontSize="lg">
                Rs
              </Box>
              {item.price.toFixed(2)}/-
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
    
    
    
    
    </Grid>



))}
<Text fontSize={12}>If you have coupen enter her</Text>

<Input onChange={handleCoupon} marginBottom={50} width={200} placeholder='Enter coupon...'/>
<Box marginBottom={10} fontSize={25} fontWeight={12}>Total amount : Rs {totalAmount} /-</Box>

<Button width={300} bg={'green'} marginBottom={10}>Place order</Button>
    



    </>
  )
}

export default Cart