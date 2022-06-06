import React, { useContext, useState } from "react";
import { ProductContext } from "../context/Context";

const Gallery = () => {
  const { gallery, titleImg } = useContext(ProductContext);
  const [selectedImg, setSelectedImg] = useState(titleImg);

  return (
    <div className="gallery">
      <div className="container">
        <div className="selected">
          <img src={selectedImg} alt="Selected Shoe" />
        </div>
        <div className="imgContainer">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Shoe"
              style={{
                border: selectedImg === img ? "4px solid #4a4e69" : "",
              }}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
