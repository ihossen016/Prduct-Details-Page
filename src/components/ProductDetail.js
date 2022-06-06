import React, { useContext, useState } from "react";
import { ProductContext } from "../context/Context";

const ProductDetail = () => {
  const { title, price } = useContext(ProductContext);
  const percent = ((price.old - price.discounted) / price.old) * 100;

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-info">
          <h2>{title}</h2>
          <h4>
            Price: ${price.discounted} <span>${price.old}</span>
            <small>({percent.toFixed(0)}% Discount)</small>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
