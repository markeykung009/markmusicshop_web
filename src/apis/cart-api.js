import axios from "../config/axios";

export const createCart = body => axios.post("/cart/createCart", body);

export const getCartList = () => axios.get("/cart/getCart");

export const deleteCart = cartId => axios.delete(`/cart/${cartId}`);
