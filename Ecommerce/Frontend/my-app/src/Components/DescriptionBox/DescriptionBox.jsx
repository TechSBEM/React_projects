import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="decriptionbox-nav-box">Description</div>
        <div className="decriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description"></div>
    </div>
  );
}

export default DescriptionBox;
