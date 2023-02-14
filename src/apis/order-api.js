import axios from "../config/axios";

export const createOrder = value => axios.post("/order/createOrder", value);
export const getOrder = () => axios.get("order/getOrder");

export const updateStatus = (id, status) =>
  axios.patch("order/updateStatus", { id, status });

// export const getStatus = userId => axios.get(`order/getStatus/${userId}`);
