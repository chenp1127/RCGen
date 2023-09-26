import React from 'react'
//images
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/carbonara.jpeg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


const AboutUs = () => {
  return (
    <article className="about-us">
      <section className="content">
        <h2>About us</h2>
        <h3 className='sub-title'>More than delicious food</h3>
        <p>
          Founded in 2023, RCGen is here to spice up your daily dishes. Giving you inspiration and saving trouble from grocery shopping, use RCGen for an all new cooking experience.
        </p>
        <div className="section-one-glass"></div>
      </section>
      <section className="images">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;