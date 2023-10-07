import {HttpClient} from './HttpClient';

const getAboutUs = () => {
  let url = 'aboutus';
  return HttpClient.apiCaller(url, 'get', null);
}

export const DriverController = {
  getAboutUs
};
