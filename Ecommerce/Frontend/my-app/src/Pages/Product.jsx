import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.jsx";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  // Storing the target product in a variable
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) return <p>Loading product info...</p>;

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
