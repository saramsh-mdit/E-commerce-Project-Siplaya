import axios from "axios";

export const axiosInstancePublic = axios.create({
  baseURL: "http://192.168.1.65:3500",
});

const token = localStorage.getItem("token") ?? "";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.1.65:3500",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
