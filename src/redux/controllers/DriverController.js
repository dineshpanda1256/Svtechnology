import { HttpClient } from "./HttpClient";

const getAboutUs = () => {
  let url = "aboutus";
  return HttpClient.apiCaller(url, "get", null);
};

const getAllbanners = () => {
  let url = "banner";
  return HttpClient.apiCaller( url, "get", null);
};

const postContactus = (data) => {
  let url = "contact";
  return HttpClient.apiCaller( url, "post", data)
}

const getAllProducts = () => {
  let url = "product";
  return HttpClient.apiCaller( url, "get", null);
};

export const DriverController = {
  getAboutUs,
  getAllbanners,
  postContactus,
  getAllProducts
};
