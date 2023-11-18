import axios from "axios";
import toastr from "toastr";

const axiosConfig = axios.create({ baseURL: "http://localhost:3000" });
export const request = ({ ...option }) => {
  // axiosConfig.defaults.headers.common.Authorization = "Bearer token";
  // axiosConfig.defaults.headers.common.Accept = "application/json";
  axiosConfig.defaults.headers.common["Content-Type"] = "application/json";
  const onSuccess = (res) => res;
  const onError = (err) => {
    toastr.error("This Item Already In Cart");
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  };
  return axiosConfig(option).then(onSuccess).catch(onError);
};

export const getAllProduct = async () => {
  return await request({ url: "/products" });
};

export const displaySingleProduct = async (id) => {
  return await request({ url: `/products/${id}` });
};

export const addToWishListConfig = async (data) => {
  return await request({
    url: "/wishList",
    method: "post",
    data: data,
  });
};
export const addToCartConfig = async (data) => {
  return await request({
    url: "/add-cart",
    method: "post",
    data: data,
  });
};

export const loginAuth = async (userData) => {
  return await request({
    url: "/login",
    method: "post",
    data: userData,
  });
};
export const registerAuth = async (userData) => {
  return await request({
    url: "/register",
    method: "post",
    data: JSON.stringify(userData),
  });
};
export const searchConfig = async (brand) => {
  return await request({
    url: `/products?brand=${brand}`,
  });
};
