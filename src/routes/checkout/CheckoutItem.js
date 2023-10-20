import React, { useEffect, useState } from "react";
import { allProductsData } from "../../data/AllProductsData";

const CheckoutItem = ({ cartItem }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price based on user-selected attributes and quantity
    const calculateTotalPrice = () => {
      const product = allProductsData.find((item) => item.id === cartItem.id);

      // Calculate total price for the current cart item
      const itemTotalPrice = cartItem.userSelectedAttributes.reduce(
        (itemPrice, attribute) => {
          const attributeGroup = product.attributes.find(
            (attr) => attr.id === attribute.attributeId
          );
          const selectedOption = attributeGroup.attributeOptions.find(
            (option) => option.id === attribute.attributeValue
          );
          const attributePrice = selectedOption ? selectedOption.price : 0;
          return itemPrice + attributePrice;
        },
        0
      );

      // Update the state with the calculated total price
      setTotalPrice(itemTotalPrice * cartItem.quantity);
    };

    // Call the function to calculate total price whenever cartItem or its attributes change
    calculateTotalPrice();
  }, [cartItem]);

  return (
    <section className="checkout-item">
      <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
      <section className="checkout-item-info">
        {cartItem.userSelectedAttributes.length === 0 ? (
          <h3>{cartItem.ItemName}</h3>
        ) : (
          <h3>
            {cartItem.ItemName}{" "}
            <span>
              {cartItem.userSelectedAttributes
                .map((attribute) => attribute.attributeValue)
                .join(", ")}
            </span>
          </h3>
        )}
        <p>Quantity: {cartItem.quantity}</p>
        <p>Price: $ {totalPrice.toFixed(2)}</p>
      </section>
    </section>
  );
};

export default CheckoutItem;
