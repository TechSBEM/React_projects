import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

// - This context will allow any component to **access the shop's data** (e.g., products) without passing it through props.

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
