import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/Context";

const Gallery = () => {
  const { productDetails, selectedImg, setSelectedImg } =
    useContext(ProductContext);

  // Rendering Selected Img after data is available
  useEffect(() => {
    setSelectedImg(productDetails && productDetails.image);
  }, [productDetails]);

  return (
    <div className="gallery">
      <div className="container">
        <div className="selected">
          {productDetails && <img src={selectedImg} alt="Selected Shoe" />}
        </div>
        <div className="imgContainer">
          {productDetails &&
            productDetails.gallery.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt="Shoe"
                style={{
                  border: selectedImg === item.url ? "4px solid orange" : "",
                }}
                onClick={() => setSelectedImg(item.url)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
