

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  
  Stack,
  useColorMode,
  Center,
  Img,

  Badge,
  Container,
  
  
  Icon,
  chakra,
  Tooltip,
  Grid,

  SimpleGrid,
  
  
  VisuallyHidden,
  grid,
  
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: ('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate=useNavigate()
  const [hover,setHover]=useState("90%")


  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/welcome')
  }
  const handleClick=()=>{
    navigate('/select')
    
  }

  const handleCheck=()=>{
    setHover("100%")
  }
  const handleLeave=()=>{
    setHover("90%")
  }

  return (


    <Grid  >
      
      <Box  bg={('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
<Img marginLeft={350}  width={300} src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"/>
      

<Text marginTop={5} color={'grey'}>Select a resturant</Text>
<Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* { (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        {/* <Image src={} alt={`Picture of ${name}`} roundedTop="lg" /> */}

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {  (
              <Text display={'flex'} rounded="full" px="4" fontSize="2.3em" colorScheme="red">
                Le Arabia Restaurant
              </Text>
            )}
            
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              
            </Box>

            <Grid  >
        <Img 
       onMouseEnter={handleCheck}
       onMouseLeave={handleLeave}
       height={hover}
       transition={".5s"}
       onClick={handleClick}
       cursor={'pointer'}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjjjBNZGZQpZiD77flzTo9ln1ok_2Z2u2uw&usqp=CAU'/>
            </Grid>

            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /> */}
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
           
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
              Bakery, Desserts, Pizza, Sandwich, Fast Food, Salad, Beverages, Coffee
Bodakdev, Ahmedabad
              </Box><br/>
              <Box as="span" color={'yellow.600'} fontSize="lg">Open now
10am – 9pm (Today)
</Box>
              
              {/* {price.toFixed(2)} */}
            </Box>
            
          </Flex>
        </Box>
      </Box>
      
    </Flex>




    <Box
      bg={('gray.50', 'gray.900')}
      color={('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Safety Center
            </Box>
            <Box as="a" href={'#'}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            {/* <ListHeader>Legal</ListHeader> */}
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
          </Stack>
          <Img width={250} marginTop={20} src="https://forums.mobirise.com/uploads/editor/hn/bjllgl5iba8y.png"/>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Install App</ListHeader> */}
            {/* <AppStoreBadge /> */}
          
          </Stack>
        </SimpleGrid>
      </Container>
      

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            {/* <SocialButton label={'Twitter'} href={'#'}> */}
              {/* <FaTwitter /> */}
            {/* </SocialButton> */}
            {/* <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube /> */}
            {/* </SocialButton> */}
            {/* <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram /> */}
            {/* </SocialButton> */}

            
          </Stack>
        </Container>
      </Box>
    </Box>

    </Grid>

  )
}



// 





 
