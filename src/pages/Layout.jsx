import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (

    <div>
        <div className='   flex flex-col min-h-screen '>
        <Navbar/>
            <Outlet/>
            <Footer/>
        
    </div>


    </div>
  
  )
}
