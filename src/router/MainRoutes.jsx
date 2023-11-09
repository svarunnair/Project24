import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import Home from '../Pages/Home'
import { Menu } from '@chakra-ui/react'
import Select from '../Pages/Select'

function MainRoutes() {
    let token=localStorage.getItem("token")
  return (
    <div>
        <Routes>

            <Route path='/' element={<Signup/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/home' element={token&&<Home/>}/>
            <Route path='/menu' element={token&&<Menu/>}/>
            <Route path='/select' element={<Select/>}/>
            
        


        </Routes>
    </div>
  )
}

export default MainRoutes