import React from 'react'
import styles from '../style'
import { discount } from '../assets'

const Hero = () => (

  <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>

    <div className={`text-white flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>

{/* discount portion */}
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'> 1 MONTH </span> ACCOUNT
        </p>
      </div>

{/* heading portion */}
      <div className='flex flex-row justify-between items-center w-full'>
        <h1>The Next <br className='sm:block hidden'/> <span>Generation</span> Payment Method.</h1>
        <div>GetStarted</div>
      </div>

      <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
        We examine annual percentage rates, annual fees.</p>



    </div>

    <div>
      <img src="" alt="" />
    </div>
  </section>

)

export default Hero
