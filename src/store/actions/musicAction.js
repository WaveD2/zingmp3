import { apiGetArtistSongs, apiGetSearch } from "../../apis/music";
import actionTypes from "./actionTypes";

//  use react-thunk
export const setCurSongId = (setId) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  setId,
});
export const setPlay = (flag) => ({
  type: actionTypes.PLAY,
  flag,
});
export const playAlbum = (flag) => ({
  type: actionTypes.SET_ALBUM,
  flag,
});
export const setIsVideo = (flag) => ({
  type: actionTypes.IS_VIDEO,
  flag,
});
export const setPlayListAlbum = (playListAlbum) => ({
  type: actionTypes.PLAY_LIST_ALBUM,
  playListAlbum,
});
export const setLoading = (flag) => ({
  type: actionTypes.IS_LOADING,
  flag,
});
export const setCurSongData = (data) => ({
  type: actionTypes.SET_CUR_SONG_DATA,
  data,
});

export const setSideBarRight = (flag) => ({
  type: actionTypes.SET_SIDE_RIGHT,
  flag,
});
export const setSongRecent = (data) => ({
  type: actionTypes.SET_SONG_RECENT,
  data,
});
export const setScrollArtist = (flag) => ({
  type: actionTypes.SET_SCROLL_ARTIST,
  flag,
});
export const setPlayListZingChart = (data) => ({
  type: actionTypes.SET_SONGS_ZINGCHART,
  data,
});

// middleware call api = redux -thunk
export const search = (keyword) => async (dispatch) => {
  try {
    const response = await apiGetSearch(keyword);
    if (response.data.err === 0) {
      dispatch({
        type: actionTypes.SEARCH,
        data: response.data.data,
        keyword: keyword,
      });
    } else {
      dispatch({
        type: actionTypes.SEARCH,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH,
      data: null,
    });
  }
};
export const getSearchSongs = (idSinger) => async (dispatch) => {
  try {
    const response = await apiGetArtistSongs(idSinger);
    if (response.data.err === 0) {
      dispatch({
        type: actionTypes.SET_SONGS_SEARCH,
        data: response.data.data,
      });
    } else {
      dispatch({
        type: actionTypes.SEARCH,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH,
      data: null,
    });
  }
};

// export const fetchDetailAlbum = (idSong) => async (dispatch) => {
//   try {
//     const response = await apis.apiGetDetailPlaylist(idSong);
//     if (response?.data.err === 0) {
//       dispatch({
//         type: actionTypes.PLAY_LIST_ALBUM,
//         playListAlbum: response.data?.data?.song?.items,
//       });

//     }
//   } catch (error) {
//     dispatch({
//       type: actionTypes.PLAY_LIST_ALBUM,
//       playListAlbum: null,
//     });
//   }
// };
