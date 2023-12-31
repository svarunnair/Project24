

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Img,
  Input,
  Button,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import PrivateRoutes from '../../router/PrivateRoutes'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// interface LinkItemProps {
//   name: string
//   icon: IconType
// }

// interface NavItemProps extends FlexProps {
//   icon: IconType
//   children: React.ReactNode
// }

// interface MobileProps extends FlexProps {
//   onOpen: () => void
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void
// }

const LinkItems  = [
  { name: 'Home', icon: FiHome },
  { name: 'Cart', icon: FiTrendingUp },
  { name: 'Payment', icon: FiCompass },
  { name: 'Food list', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
]

const SidebarContent = ({ onClose, ...rest }) => {

    const navigate=useNavigate()

    const handleClick=(name)=>{
        if(name==="Home"){
            navigate('/home')
        }
        if(name==="Cart"){
            navigate('/cart')
        }
        if(name==="Payment"){
            navigate('/payment')
        }
        if(name==="Food list"){
          navigate('/select')
        }
    }

    

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
         <Img marginLeft={6} marginTop={5} width={20} borderRadius={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14KPbqGbB26YBp8UiZsC5nel1RiVahwrmRw&usqp=CAU'/>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem onClick={()=>handleClick(link.name)} key={link.name} icon={link.icon}>
          {link.name}

        </NavItem>
      
      ))}



<NavItem  >
       <Text onClick={()=>navigate('/select')}>select</Text> 

        </NavItem>
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
 
    const navigate=useNavigate()
    // const mainData=useSelector((store)=>store.data.data)
    // const [search,setSearch]=useState([])
    const [searchParams,setSearchParams]=useState('')
    const path=useLocation()

    console.log("path",path)
    


    const handleSelect=()=>{
        navigate('/select')
      }
    const handlePayment=()=>{
        navigate('/payment')
    }
    const handleCart=()=>{
        navigate('/cart')
    }
    const handleLogout=()=>{
      localStorage.clear()
      navigate('/welcome')
    }
    // let mValue;
    const handleSearch=(e)=>{
     let value=e.target.value 
      
        navigate(`/select/${value}`);
        setSearchParams(value)
  
    }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>
      {path.pathname===`/select/${searchParams}`&&<Input fontFamily={'serif'} onChange={handleSearch} placeholder='Search your tast' />}
    

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem onClick={handleSelect}>Profile</MenuItem>
              <MenuItem onClick={handleCart}>Cart</MenuItem>
              <MenuItem onClick={handlePayment}>Payment Page</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const SideBar = () => {
    
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
       <PrivateRoutes/>
      </Box>
    </Box>
  )
}

export default SideBar