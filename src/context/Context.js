import React from "react";
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const url =
    "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product";

  const [productDetails, setProductDetails] = useState();
  const [selectedImg, setSelectedImg] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProductDetails(data));
  }, []);

  // const [gallery, setGallery] = useState([]);
  // const [titleImg, setTitleImg] = useState("");
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState({});
  // const [colors, setColors] = useState([]);
  // const [sizes, setSizes] = useState([]);
  // // const [skus, setSkus] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setGallery(data.gallery.map(img => img.url));
  //       setTitleImg(data.image);
  //       setTitle(data.title);
  //       setPrice(data.price);
  //       setColors(data.variation.props[0]);
  //       setSizes(data.variation.props[1]);
  //       // setSkus(data.variation.skus);
  //       console.log(data);
  //     });
  // }, []);

  //   console.log(gallery, title, price);

  return (
    <ProductContext.Provider
      value={{ productDetails, selectedImg, setSelectedImg }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
