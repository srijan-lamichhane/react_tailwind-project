import React from 'react'
import {close, logo, menu} from '../assets'


const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src="{logo}" alt="WixBank" className='w-[124px] h-[32px]'/>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Features</a></li>
        <li><a href='#'>Solution</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
