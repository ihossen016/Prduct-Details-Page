import React, { useContext, useState } from "react";
import { ProductContext } from "../context/Context";

const ProductDetail = () => {
  const { productDetails } = useContext(ProductContext);

  // const percent = ((price.old - price.discounted) / price.old) * 100;

  // const colorList = colors.values;
  // const sizeList = sizes.values;

  // const [colorName, setColorName] = useState(colorList[0].name);
  // const [sizeName, setSizeName] = useState(sizeList[0].name);

  // const [selectedColor, setSelectedColor] = useState(colors[0].img);

  // console.log(colorList);
  // console.log(sizeList);

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-info">
          <h2>{productDetails && productDetails.title}</h2>
          {/* <h4>
            Price: ${price.discounted} <span>${price.old}</span>
            <small>({percent.toFixed(0)}% Discount)</small>
          </h4> */}
        </div>
        <div className="color">
          {/* <h4>Color: {colorName}</h4>
          <div className="color-imgs">
            {colorList.map(color => (
              <img
                key={color.id}
                src={color.image}
                alt="Shoe Color"
                style={{
                  border: colorName === color.name ? "4px solid orange" : "",
                }}
                onClick={() => setColorName(color.name)}
              />
            ))}
          </div> */}
        </div>
        <div className="size">
          {/* <h4>Size: {sizeName}</h4>
          <div className="shoe-sizes">
            {sizeList.map(size => (
              <li
                key={size.id}
                style={{
                  border: sizeName === size.name ? "4px solid orange" : "",
                }}
                onClick={() => setSizeName(size.name)}
              >
                {size.name}
              </li>
            ))}
          </div> */}
        </div>
        <button className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
