import React, { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="WixBank" className='w-[124px] h-[32px]'/>


      <ul className='list-none justify-end items-center flex-1 hidden sm:flex'>
        {/* class hidden sm:flex, the element will be hidden by default (hidden class), but it will become visible when the screen width is equal to or larger than the small (sm 768px) breakpoint (sm:flex class). So, it will be visible on small screens and larger. */}
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




      <div className='flex flex-1 justify-end items-center sm:hidden'>
        <img src={toggle? close : menu} alt="menu" 
        // if (clicked) close else (normally) menu. svg of menu and close availiable on assets.
        className='w-[28px] h-[28px] object-contain' 
        onClick={() => setToggle((prev) => !prev)}/>
        {/* prev is just a boolean paramenter/variable that is going to toogle between true and false in our useState */}
      </div>



      <div className={` ${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        {/* we have used side-top animation in sidebar (code in index.css) */}
          
        <ul className='list-none justify-end items-start flex-1 flex flex-col'> {/* little change form above */}
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
      </div>



    </nav>
  )
}

export default Navbar
