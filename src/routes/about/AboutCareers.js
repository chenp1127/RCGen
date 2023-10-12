import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">Careers</h2>
        <h3>Join the team</h3>
        <p>
        At RCGen, we're on the lookout for passionate and driven individuals to join our team. If you have a love for food, creativity in the kitchen, and a commitment to making culinary experiences accessible to all, we want you on board. Whether you're a seasoned chef, a tech wizard, or a marketing guru, we believe in fostering innovation and collaboration. Join us in shaping the future of online recipe recommendations and ingredient sales. Together, we'll whip up success and create a world where everyone can savor the joy of cooking. Discover exciting opportunities at RCGen and be a part of our delicious journey!
        </p>
        <Link to="/careers" onClick={ResetLocation} className="active-button-style">Join now</Link>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutCareers;
