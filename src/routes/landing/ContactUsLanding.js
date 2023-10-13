import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../assets/images/contact-us/food.jpeg'
//import PizzaOne from '../../assets/images/contact-us/image-one-parallax.webp'


const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white" >
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 500, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 800, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-two"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 1100, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-three"
      />
      <section className='company-details'>
        <div>
          <h2>+65 8888 8888</h2>
          <p>Contact us if you have any questions</p>
        </div>
        <div>
          <h2>5 Ang Mo Kio Street 62</h2>
          <p>Singapore, Singapore</p>
        </div>
        <div>
          <h2>Helpdesk: Monday-Friday</h2>
          <p>9:00am - 5:00pm</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;