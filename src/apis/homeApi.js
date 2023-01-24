import axios from "../axios";

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/home",
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
        url: "/charthome",
        method: "get",
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      console.log(404);
      reject(error);
    }
  });
