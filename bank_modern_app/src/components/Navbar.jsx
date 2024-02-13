import React from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src="{logo}" alt="WixBank" className='w-[124px] h-[32px]'/>


      <ul className='list-none justify-end items-center flex-1 sm:flex hidden'>
        {navLinks.map((nav,index) => (

       <li
        key={nav.id}
        className={`font-poppins text-[16px] font-normal cursor-pointer text-white ${index===navLinks.length-1? 'mr-0' : 'mr-10'}`}
        // mr-10 will give space for last element i.e clients which we don't need so we used above logic
       >
        <a href={`#${nav.id}`}>{nav.title}</a>
       </li>
       
       ))}
      </ul>


    </nav>
  )
}

export default Navbar
