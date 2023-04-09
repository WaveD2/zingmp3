import axios from "../axios";
export const apiGetSong = (songId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/song",
        method: "get",
        params: { id: songId },
      });
      resolve(response);
    } catch (error) {
      console.log("music", 404);
      reject(error);
      alert("Bạn hãy mở link server để có API !!! ");
    }
  });
export const apiGetDetaiSong = (songId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/infosong",
        method: "get",
        params: { id: songId },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetDetailPlaylist = (listId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/detailplaylist",
        method: "get",
        params: { id: listId },
      });
      // console.log(response);
      resolve(response);
    } catch (error) {
      console.log("music", 404);
      reject(error);
    }
  });
export const apiGetSearch = (keyword) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/search",
        method: "get",
        params: { keyword },
      });
      // console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetArtistSongs = (idSinger) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/artistsong",
        method: "get",
        params: {
          id: idSinger,
          page: 1,
          count: 50,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetArtist = (name) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/artist",
        method: "get",
        params: {
          name: name,
        },
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetVideo = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/video",
        method: "get",
        params: { id },
      });
      resolve(response);
    } catch (error) {
      console.log("music", 404);
      reject(error);
    }
  });
