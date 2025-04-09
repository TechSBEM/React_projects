import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

// - This context will allow any component to **access the shop's data** (e.g., products) without passing it through props.

export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, SetCartItems] = useState(getDefaultCart());

  const addToCart = (ItemId) => {
    SetCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (ItemId) => {
    SetCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  function getTotalCartItems() {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
