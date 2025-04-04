import "../Navbar/Navbar.css";
import React, { useState } from "react";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

function Navbar() {
  // Using state to add the horinzontal rule under the selected menu{Shop, Women, Men Kids}
  const [menu, setMenu] = useState("Shop"); //Default being shop

  //   An array for the menu
  const menuItems = ["Shop", "Men", "Women", "Kids"];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* List of the menu */}
        {menuItems.map((item) => (
          <li key={item} onClick={() => setMenu(item)}>
            {/* Using and operator the render the selected menu */}
            {item}
            {menu === item && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        div.nav-cart-count
      </div>
    </div>
  );
}

export default Navbar;
