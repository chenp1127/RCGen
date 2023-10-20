import React, { useEffect, useState } from "react";
import AddToCartButton from "../cart/AddToCartButton";
import Attribute from "../menu/Attribute";
import { allProductsData } from "../../data/AllProductsData.js";
import { Link } from "react-router-dom";

const SingleItem = ({ handleAddProduct, handleRemoveProduct }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [targetAttribute, setTargetAttribute] = useState('');

  const handleSelectedAttributes = (attributeId, attributeValue, attributePrice) => {
    setTargetAttribute(attributeValue);
    const selectedAttribute = {
      attributeId,
      attributeValue,
      attributePrice: parseFloat(attributePrice) // Parse the price to float
    };
    setSelectedAttributes([selectedAttribute]);
  };

  useEffect(() => {
    document.title = `${singleProduct.ItemName} | RCGen`;
    setSingleProduct(allProductsData.find(item => item.id === window.location.pathname.substring(6)));
  }, [singleProduct.ItemName]);

  return (
    <main className="single-item-container">
      <Link to="/menu" className="back-btn">
        ← Back
      </Link>
      <article className="single-item flex-container flex-column txt-white">
        <img
          src={singleProduct?.ItemImg}
          alt={`${singleProduct?.ItemName}`}
        />
        <section className="single-item-info">
          <section className="single-item-title">
            <h2>{singleProduct?.ItemName}</h2>
            <p>{singleProduct?.ItemDescription}</p>
          </section>
          {singleProduct?.attributes?.length === 0 ? null :
            singleProduct?.attributes?.map(attribute => (
              <Attribute
                key={attribute.id}
                className="single-item-attributes"
                handleSelectedAttributes={handleSelectedAttributes}
                attribute={attribute}
                targetAttribute={targetAttribute}
              />
            ))
          }
          <section className="price">
            <p className="price-num">
              <span>$</span>
              {selectedAttributes.length > 0 ? selectedAttributes[0].attributePrice.toFixed(2) : singleProduct.ItemPrice}
            </p>
            <AddToCartButton
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              singleProduct={singleProduct}
              selectedAttributes={selectedAttributes}
              targetAttribute={targetAttribute}
              setTargetAttribute={setTargetAttribute}
            />
          </section>
        </section>
      </article>
      <p className="single-item-recipe single-item flex-container flex-column txt-white">
        <h2>Recipe</h2>
        <p>Cooking time: {singleProduct?.CookingTime} mins</p>
        <p className="single-item-recipe">{singleProduct?.Recipe}</p>
      </p>
    </main>
  );
}

export default SingleItem;
