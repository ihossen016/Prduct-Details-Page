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
  const [selectedColorID, setSelectedColorID] = useState();
  const [selectedSizeID, setSelectedSizeID] = useState();
  const [skus, setSkus] = useState();

  // extracting data from productDetails
  useEffect(() => {
    // Extracting default old & discounted price
    setDiscountedPrice(productDetails && productDetails.price.discounted);
    setOldPrice(productDetails && productDetails.price.old);

    // Extracting color & size list
    setColorList(
      productDetails && [...productDetails.variation.props[0].values]
    );
    setSizeList(
      productDetails && [...productDetails.variation.props[1].values]
    );

    // Extracting color name & size number
    setColorName(
      productDetails && productDetails.variation.props[0].values[0].name
    );
    setSizeNum(
      productDetails && productDetails.variation.props[1].values[0].name
    );

    // Extracting Default Color & Size ID
    setSelectedColorID(
      productDetails && productDetails.variation.props[0].values[0].id
    );
    setSelectedSizeID(
      productDetails && productDetails.variation.props[1].values[0].id
    );

    // Extracting Skus
    setSkus(productDetails && productDetails.variation.skus);
  }, [productDetails]);

  // updating price for selected color & size
  const setNewPrice = (selectedColorID, selectedSizeID) => {
    let filteredSku = skus.filter(
      sku => sku.props[0] == selectedColorID && sku.props[1] == selectedSizeID
    );

    // update old & discounted price
    setDiscountedPrice(filteredSku[0].price.discounted);
    setOldPrice(filteredSku[0].price.old);
  };

  // Calculating discount percentage
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
                    // update color name
                    setColorName(color.name);

                    // update selected Image in Gallery Component
                    setSelectedImg(color.image);

                    // update color ID
                    setSelectedColorID(color.id);

                    // update price
                    setNewPrice(color.id, selectedSizeID);
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
                  onClick={() => {
                    // update size number
                    setSizeNum(size.name);

                    // update size ID
                    setSelectedSizeID(size.id);

                    // update price
                    setNewPrice(selectedColorID, size.id);
                  }}
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
