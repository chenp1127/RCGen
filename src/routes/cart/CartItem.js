import React from "react";
import ChangeItemQuantity from "./ChangeItemQuantity";
import { allProductsData } from "../../data/AllProductsData";
//import CheckoutItem from "../checkout/CheckoutItem";

const CartItem = ({
  handleAddProduct,
  handleRemoveProduct,
  clearCart,
  cartItems,
  cartTotals
}) => {
  return (
    <React.Fragment>
      {cartItems.map((cartItem, index) => {
        const product = allProductsData.find(item => item.id === cartItem.id);
        const totalPrice = cartItem.userSelectedAttributes.reduce((total, attribute) => {
          const attributeGroup = product.attributes.find(attr => attr.id === attribute.attributeId);
          const selectedOption = attributeGroup.attributeOptions.find(option => option.id === attribute.attributeValue);
          const attributePrice = selectedOption ? selectedOption.price : 0;
          return total + attributePrice;
        }, 0) * cartItem.quantity;

        return (
          <section className="cart-item" key={index}>
            <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
            <section className="cart-item-content">
              <section className="cart-item-info">
                {cartItem.userSelectedAttributes.length === 0 ? (
                  <h3 className="cart-item-title">{cartItem.ItemName}</h3>
                ) : (
                  <h3 className="cart-item-title">
              
                    {cartItem.userSelectedAttributes.map((i, index) => {
                      return <span key={index}>{i.attributeValue}</span>;
                    })}
                  </h3>
                )}
                
              </section>
              <section className="cart-item-interaction">
                <ChangeItemQuantity
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  cartItem={cartItem}
                />
                <p className="cart-item-price">${totalPrice.toFixed(2)}</p>
              </section>
            </section>
            
          </section>
        );
      })}
      <button onClick={clearCart} className="cart-clear-btn">
        remove all items from the cart
      </button>
      {cartTotals}
      
    </React.Fragment>
  );
};

export default CartItem;
