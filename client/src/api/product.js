import axios from "axios";

export const getAllProduct = () => axios.get("http://localhost:3500/product");

export const getProductById = (id) =>
  axios.get(`http://localhost:3500/product/${id}`);
