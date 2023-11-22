import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import WelcomePage from '../Pages/WelcomePage'
import Signin from '../Pages/Signin'
import GoogleAccount from '../Pages/GoogleAuth/GoogleAccount'
import Select from '../Pages/Select'

function PublicRoutes() {
  return (
    <div>
        <Routes>

            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/welcome' element={<WelcomePage/>}/>
            <Route path='/google' element={<GoogleAccount/>}/>
            <Route path='/select' element={<Select/>}/>


        </Routes>
    </div>
  )
}

export default PublicRoutes