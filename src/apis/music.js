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
      reject(error);
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
      resolve(response);
    } catch (error) {
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
export const apiGetTop100 = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/top100",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      console.log("music top", 404);
      reject(error);
    }
  });
export const apiGetNewSong = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "api/newreleasechart",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      console.log("music top", 404);
      reject(error);
    }
  });
