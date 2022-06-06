import React, { useContext, useState } from "react";
import { ProductContext } from "../context/Context";

const Gallery = () => {
  const { gallery } = useContext(ProductContext);
  const [selectedImg, setSelectedImg] = useState(gallery[0]);

  return (
    <div className="gallery">
      <div className="container">
        <div className="selected">
          <img src={selectedImg} alt="img" />
        </div>
        <div className="imgContainer">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="shoe"
              style={{ border: selectedImg === img ? "4px solid gray" : "" }}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
