import { createContext, useEffect, useState } from "react";
import * as cartApi from "../apis/cart-api";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [priceProcess, setPriceProcess] = useState(0);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("pending");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState([]);

  console.log(cart);

  const getCartList = async () => {
    try {
      const res = await cartApi.getCartList();
      // console.log(res.data);
      if (res.data) {
        console.log(res.data);
        const newFormat = res.data.cart.map(el => {
          return {
            id: el.productId,
            title: el.Product.title,
            price: el.Product.price,
            productImage: el.Product.productImage,
            type: el.Product.Category?.type,
            quantity: el.amount,
            cartId: el.id,
            total: el.Product.price * el.amount,
          };
        });
        setCart(newFormat);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        cart,
        setCart,
        getCartList,
        priceProcess,
        setPriceProcess,
        address,
        setAddress,
        file,
        setFile,
        status,
        setStatus,
        loading,
        setLoading,
        admin,
        setAdmin,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
