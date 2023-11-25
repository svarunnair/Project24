// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getPayment } from '../redux/data/action'
// import QRCode from "react-qr-code";
// function Payment() {

//   const payment=useSelector((store)=>store.data.getPayment)
//   const dispatch=useDispatch()

//   console.log("payment",payment)

// useEffect(()=>{
//   dispatch(getPayment())
// },[])

//   return (
//     <div>Payment

//       {payment?.map((item)=>(
//         <>
//         {item.item}

   



//         <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
//   <QRCode
//     size={256}
//     style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//     value={item.qrImage}
//     viewBox={`0 0 256 256`}
//   />
// </div>
//         </>
//       ))}






//     </div>
//   )
// }

// export default Payment





import { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  
  HStack,
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment } from '../redux/data/action'
import QRCode from 'react-qr-code'

export default function Payment() {

  const payment=useSelector((store)=>store.data.getPayment)
  const dispatch=useDispatch()

  console.log("payment",payment)

useEffect(()=>{
  dispatch(getPayment())
},[])



  const [liked, setLiked] = useState(false)

  return (

    <>

    {payment.map((item)=>(
      <>

<Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={item.image}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={item.qrImage}
    viewBox={`0 0 256 256`}
  />

      
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              React
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {item.item}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            In this post, we will give an overview of what is new in React 18, and what it
            means for the future.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
      
      </>
    ))}
   

    </>
  )
}