import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import { Menu, Select } from '@chakra-ui/react'
import Payment from '../Pages/Payment'
import Home from '../Pages/Home'
import List from '../Pages/Select'

function PrivateRoutes() {

    let token=localStorage.getItem("token")
    let email=localStorage.getItem('email')
    
  return (
    <div>
        <Routes>

            <Route path='/' element={token||email?<Home/>:<>please signup</>}/>
            <Route path='/home' element={token||email?<Home/>:<>please signup</>}/>
            <Route path='/cart' element={token||email?<Cart/>:<>please signup</>}/>
            <Route path='/menu' element={token||email?<Menu/>:<>please signup</>}/>
            <Route path='/payment' element={token||email?<Payment/>:<>please signup</>}/>
            <Route path='/select' element={token||email?<List/>:<>please signup</>}/>


        </Routes>
    </div>
  )
}

export default PrivateRoutes