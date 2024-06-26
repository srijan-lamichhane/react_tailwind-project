import React from 'react'
import {logo} from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="wixbank" className='w-[260px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
{/* links */}
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {/* flex-1.5 cannot be read as property so use 1.5 inside square bracket.  */}
        {footerLinks.map((footerlink) =>(
          <div key={footerlink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[24px] text-white'>{footerlink.title}</h4>

            <ul className='list-none mt-4'>
              {/* this time we will be mapping from the above footerlink */}
              {footerlink.links.map((link, index) =>(
                <li key={link.name}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length-1 ? 'mb-4' : 'mb-0'}`}
                >{link.name}</li>
              ) 
            )}

            </ul>
          </div>  
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className={`${styles.paragraph} text-center`}>Copyright Ⓒ 2024 WixBank. All Rights Reserved.</p>
      {/* social media */}
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index)=> (
          <img src={social.icon} alt={social.id} className={`${index!==socialMedia.length-1?'mr-6':'mr-0'} w-[21px] h[21px] object-contain cursor-pointer`}/>
        ))}
      </div>
    </div>

  </section>
)


export default Footer
