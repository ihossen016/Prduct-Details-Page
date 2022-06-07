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

  return (
    <ProductContext.Provider
      value={{ productDetails, selectedImg, setSelectedImg }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
