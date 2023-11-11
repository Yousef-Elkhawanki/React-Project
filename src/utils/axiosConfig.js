import axios from "axios";

const axiosConfig = axios.create({ baseURL: "http://localhost:8000" });
export const request = ({ ...option }) => {
  axiosConfig.defaults.headers.common.Authorization = "Bearer token";
  axiosConfig.defaults.headers.common.Accept = "appliction/json";
  axiosConfig.defaults.headers.common["Content-Type"] = "appliction/json";
  const onSuccess = (res) => res;
  const onError = (err) => err;
  return axiosConfig(option).then(onSuccess).catch(onError);
};

export const getAllProduct = async () => {
  return await request({ url: "/products" });
};

export const displaySingleProduct = async (id) => {
  return await request({ url: `/products/${id}` });
};
