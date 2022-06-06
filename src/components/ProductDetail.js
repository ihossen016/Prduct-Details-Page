import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/Context";

const ProductDetail = () => {
  const { productDetails, setSelectedImg } = useContext(ProductContext);

  const [discountedPrice, setDiscountedPrice] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [colorName, setColorName] = useState("");
  const [sizeNum, setSizeNum] = useState("");

  // extracting data from productDetails
  useEffect(() => {
    setDiscountedPrice(productDetails && productDetails.price.discounted);
    setOldPrice(productDetails && productDetails.price.old);
    setColorList(
      productDetails && [...productDetails.variation.props[0].values]
    );
    setSizeList(
      productDetails && [...productDetails.variation.props[1].values]
    );

    setColorName(
      productDetails && productDetails.variation.props[0].values[0].name
    );
    setSizeNum(
      productDetails && productDetails.variation.props[1].values[0].name
    );
  }, [productDetails]);

  const percent = ((oldPrice - discountedPrice) / oldPrice) * 100;

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-info">
          <h2>{productDetails && productDetails.title}</h2>
          {productDetails && (
            <h4>
              Price: ${discountedPrice}
              <span>${oldPrice}</span>
              <small>({percent.toFixed(0)}% Discount)</small>
            </h4>
          )}
        </div>
        <div className="color">
          <h4>Color: {colorName}</h4>
          <div className="color-imgs">
            {colorList &&
              colorList.map(color => (
                <img
                  key={color.id}
                  src={color.image}
                  alt="Shoe Color"
                  style={{
                    border: colorName === color.name ? "3px solid orange" : "",
                  }}
                  onClick={() => {
                    setColorName(color.name);
                    setSelectedImg(color.image);
                  }}
                />
              ))}
          </div>
        </div>
        <div className="size">
          <h4>Size: {sizeNum}</h4>
          <div className="shoe-sizes">
            {sizeList &&
              sizeList.map(size => (
                <li
                  key={size.id}
                  style={{
                    border: sizeNum === size.name ? "3px solid orange" : "",
                  }}
                  onClick={() => setSizeNum(size.name)}
                >
                  {size.name}
                </li>
              ))}
          </div>
        </div>
        <button className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
