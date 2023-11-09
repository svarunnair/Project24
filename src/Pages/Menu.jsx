import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store'
import { getData } from '../redux/data/action'

function Menu() {

    const mainData=useSelector((stote)=>store.data.data)
    const dispatch=useDispatch

    console.log("mainData",mainData)

    useEffect(()=>{
        dispatch(getData())
    },[])
    
  return (
    <div>Menu
        
    </div>
  )
}

export default Menu