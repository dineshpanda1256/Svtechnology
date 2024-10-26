import { HttpClient } from "./HttpClient";

const getAboutUs = () => {
  let url = "aboutus";
  return HttpClient.apiCaller(url, "get", null);
};

const getAllbanners = () => {
  let url = "banner";
  return HttpClient.apiCaller(url, "get", null);
};

const postContactus = (data) => {
  let url = "contact";
  return HttpClient.apiCaller(url, "post", data);
};

const getAllProducts = () => {
  let url = "product";
  return HttpClient.apiCaller(url, "get", null);
};

const getAllServices = () => {
  let url = "service";
  return HttpClient.apiCaller(url, "get", null);
};

const payment = (data) => {
  let url = "/user/razorpay/payment";
  return HttpClient.apiCaller(url, "POST", data);
};

const getProductDetailsById = (items) => {
  let url = `product/${items._id}`;
  return HttpClient.apiCaller(url, "GET", null);
};

const login = (data) => {
  let url = "svlogin";
  return HttpClient.apiCaller(url, "POST", data);
};

const register = (data) => {
  let url = "svregister";
  return HttpClient.apiCaller(url, "POST", data);
};

const createOrder = (data) => {
  let url = "sv-order";
  return HttpClient.apiCaller(url, "POST", data);
};

const verifyPayment = (data) => {
  let url = "user/razorpay/payment-verification";
  return HttpClient.apiCaller(url, "POST", data);
};

const getAllOrdersHistory = (items) => {
  let url = `sv-orderHistory/${items?._id}`;
  return HttpClient.apiCaller(url, "GET", null);
};

export const DriverController = {
  getAboutUs,
  getAllbanners,
  postContactus,
  getAllProducts,
  getAllServices,
  payment,
  getProductDetailsById,
  login,
  register,
  createOrder,
  verifyPayment,
  getAllOrdersHistory,
};
