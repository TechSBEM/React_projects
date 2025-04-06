import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";

function ShopCategory(props) {
  // Destructuring
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
    </div>
  );
}

export default ShopCategory;
