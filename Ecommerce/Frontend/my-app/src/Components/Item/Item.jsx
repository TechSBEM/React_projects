import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      {/* Retrieving the productId when the product image is clicked */}
      <Link to={`/product/${props.id}`}>
        {/* gettig to the top of the page when an image is clicked */}
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
