import { axiosInstancePublic } from "../config/axiosInstance";

export const loginSeller = (data) => {
  return axiosInstancePublic.post("/auth/login/seller", data);
};

export const loginUser = (data) =>
  axiosInstancePublic.post("/auth/login/user", data);

export const registerSeller = (data) =>
  axiosInstancePublic.post("/auth/register/seller/", data);

export const registerUser = (data) =>
  axiosInstancePublic.post("/auth/register/user", data);
