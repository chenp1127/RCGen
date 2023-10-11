import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">Collaboration</h2>
        <h3>Join the business</h3>
        <p>
        Join our thriving culinary community by becoming a part of our franchise family! At RCGen, we're passionate about sharing delightful recipes and providing easy access to high-quality ingredients. As a franchisee, you'll have the opportunity to bring the joy of cooking to your local community while benefiting from our proven business model. Our comprehensive support, extensive recipe library, and top-notch ingredients make it a breeze to create mouthwatering dishes at home. If you're looking to embark on a delicious and rewarding journey, join us at RCGen in spreading the love for great food. Together, we'll make every meal a memorable experience. 
        </p>
        <Link to="/contact" onClick={ResetLocation} className="active-button-style">Request a call</Link>
      </section>
    </article>
  );
}

export default AboutCollaboration;
