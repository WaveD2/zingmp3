import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_SEVER_URL,
});
export default instance;

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
