import axios from "axios";

export const getAllProduct = () => axios.get("http://localhost:3500/product");
