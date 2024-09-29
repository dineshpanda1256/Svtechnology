import { HttpClient } from "./HttpClient";

const getAboutUs = () => {
  let url = "aboutus";
  return HttpClient.apiCaller(url, "get", null);
};

const getAllbanners = () => {
  let url = "banner";
  return HttpClient.apiCaller( url, "get", null);
};

const payment = data => {
  let url = 'user/razorpay/payment';
  return HttpClient.apiCaller(url, 'POST', data);
};

export const DriverController = {
  getAboutUs,
  getAllbanners,
  payment
};
