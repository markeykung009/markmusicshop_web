import axios from "../config/axios";

export const getAllProduct = () => axios.get("/product/getAllProduct");

export const matchProduct = value =>
  axios.get(`/product/matchProduct/${value}`);
