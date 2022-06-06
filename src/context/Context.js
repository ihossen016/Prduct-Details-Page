import React from "react";
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [gallery, setGallery] = useState([]);
  const [titleImg, setTitleImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState({});

  useEffect(() => {
    fetch(
      "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
    )
      .then(res => res.json())
      .then(data => {
        setGallery(data.gallery.map(img => img.url));
        setTitleImg(data.image);
        setTitle(data.title);
        setPrice(data.price);
      });
  }, []);

  //   console.log(gallery, title, price);

  return (
    <ProductContext.Provider
      value={{ gallery, titleImg, title, setTitle, price, setPrice }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
