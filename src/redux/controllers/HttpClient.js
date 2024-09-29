import axios from 'axios';


const API_BASE_URL = 'http://localhost:7000/api/v1/';
// const API_BASE_URL = 'https://svtechnology-backend.onrender.com/api/v1/';


const apiCaller = (uri, method = "GET", data = {},Token, contentType) => {
  console.log(`Api Caller Data of ${uri}...`, data);
  return new Promise((resolve, reject) => {
      var config = {
          method : method,
          url: API_BASE_URL + uri,
          headers : {
              // "Content-Type" : contentType ? contentType : "application/json",
              // 'Authorization': `Bearer ${Token}`
          },
          data: data,
      };
      axios(config)
      .then(function (response){
          console.log(`api caller response of ${uri}...`,response.data);
          resolve(response);
      })
      .catch(function (error) {
              console.log(`api caller Error of ${uri}...`, error);
              reject(error);
      });
  });
};


export const HttpClient = {
  apiCaller,
  API_BASE_URL
};
