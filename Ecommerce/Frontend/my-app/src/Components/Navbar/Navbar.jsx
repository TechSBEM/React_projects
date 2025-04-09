import "../Navbar/Navbar.css";
import React, { useContext, useState } from "react";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  // Using state to add the horinzontal rule under the selected menu{Shop, Women, Men Kids}
  const [menu, setMenu] = useState("shop"); //Default being shop
  const { getTotalCartItems } = useContext(ShopContext);

  //   An array for the menu
  const menuItems = ["shop", "mens", "womens", "Kids"];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* Linking the Pages to the Routes */}
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/ " style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
