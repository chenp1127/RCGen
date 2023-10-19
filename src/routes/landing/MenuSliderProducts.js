import React from 'react'
import { motion } from "framer-motion";

const MenuSliderProducts = ({ singleProduct }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -300 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -300 }}
      transition={{ duration: 1 }}
      className="slider-product">
      <img
        src={singleProduct.ItemImg}
        //srcSet={` ${singleProduct.img700} 400w, ${singleProduct.img375} 375w`}
        //sizes="(min-width: 700px) 700px, 375px"
        alt={singleProduct.ItemName}
      />
      <section className="slider-product-description">
        <h3 className="pop-font txt-white">{singleProduct.ItemName}</h3>
        <p className="dish-details-desc pop-font">
          {singleProduct.ItemDescription}
        </p>
      </section>
    </motion.div>
  )
}

export default MenuSliderProducts;
