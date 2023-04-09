import axios from "../axios";

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(process.env.REACT_APP_SEVER_URL);
      const response = await axios({
        url: "api/home",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      console.log(404);
      reject(error);
    }
  });
export const apiGetChart = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/charthome",
        method: "get",
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      console.log(404);
      reject(error);
    }
  });
