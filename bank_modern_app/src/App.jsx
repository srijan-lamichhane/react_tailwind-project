import React from 'react'
import styles from './style'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components'

const App = () => (

  <div className='bg-primary w-full overflow-hidden'>
    {/* primary color is defined in tailwind.config.js as 00040f(dark blue) */}
    {/* overflow is generally used for scrolling. */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      {/* dynamically set the value of a class name based on some variable or condition */}
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.paddingX}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>

)

export default App
