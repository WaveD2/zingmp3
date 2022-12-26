import actionTypes from "../actions/actionTypes";
const initState = {
  curSongId: null,
  curSongData: null,
  songsRecent: [],
  isPlay: false,
  atAlbum: false,
  isPlayListAlbum: null,
  isLoading: false,
  isSidebarRight: false,
  dataSearch: null,
  keyword: "",
  isListSongSearch: null,
  isScrollArtist: false,
  isListSongZingChart: null,
  isVideo: false,
};
const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.setId || null,
      };
    case actionTypes.PLAY:
      return {
        ...state,
        isPlay: action.flag,
      };
    case actionTypes.SET_ALBUM:
      return {
        ...state,
        atAlbum: action.flag,
      };
    case actionTypes.PLAY_LIST_ALBUM:
      return {
        ...state,
        isPlayListAlbum: action.playListAlbum || null,
      };
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.flag,
      };
    case actionTypes.SET_CUR_SONG_DATA:
      return {
        ...state,
        curSongData: action.data || null,
      };
    case actionTypes.SET_SIDE_RIGHT:
      return {
        ...state,
        isSidebarRight: action.flag,
      };
    case actionTypes.IS_VIDEO:
      return {
        ...state,
        isVideo: action.flag,
      };
    case actionTypes.SET_SONG_RECENT:
      return {
        ...state,
        songsRecent: [action.data, ...state?.songsRecent] || [],
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        dataSearch: action.data || null,
        keyword: action.keyword || "",
      };
    case actionTypes.SET_SONGS_SEARCH:
      return {
        ...state,
        isListSongSearch: action.data || null,
      };
    case actionTypes.SET_SCROLL_ARTIST:
      return {
        ...state,
        isScrollArtist: action.flag || null,
      };
    case actionTypes.SET_SONGS_ZINGCHART:
      return {
        ...state,
        isListSongZingChart: action.data || null,
      };

    default:
      return state;
  }
};

export default musicReducer;
