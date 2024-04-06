import React from 'react'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Clients = () => (
  <section id='clients' className={` ${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

{/* to do (for gradient) */}
    <div />

    <div>
      <h1>What people are <br /> saying about us</h1>
      <div>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div>
      <FeedbackCard />
    </div>

  </section>
)

export default Clients
