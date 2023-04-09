import actionTypes from "../actions/actionTypes";
const initState = {
  banner: null,
  listSongAlbumEvent: null,
  newEveryday: null,
  top100: null,
  xone: null,
  liveRadio: null,
  newMusic: null,
  newRelease: null,
  chartSection: null,
  rank: null,
  allArtist: null,
  weekChart: null,
  isLoading: false,
};
const appReducer = (state = initState, action) => {
  // action ===   dispatch({
  //   type: actionTypes.GET_HOME,
  //   homeData: response.data.items,
  // }); from homeAction

  switch (action.type) {
    case actionTypes.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionId === "hSlider").items ||
          null,
        listSongAlbumEvent:
          action.homeData?.find((item) => item.sectionId === "hAutoTheme1") ||
          null,
        newEveryday:
          action.homeData?.find((item) => item.sectionId === "hAutoTheme2") ||
          null,
        top100:
          action.homeData?.find((item) => item.sectionId === "h100") || null,
        xone:
          action.homeData?.find((item) => item.sectionId === "hXone") || null,
        liveRadio:
          action.homeData?.find((item) => item.sectionId === "hLiveRadio") ||
          null,
        newMusic:
          {
            ...action.homeData?.find((item) => item.sectionId === "hAlbum"),
            title: "Nhạc mới",
          } || null,
        newRelease:
          action.homeData?.find((item) => item.sectionType === "new-release") ||
          null,
        weekChart:
          action.homeData?.find((item) => item?.sectionType === "weekChart")
            ?.items || null,
        allArtist:
          action.homeData?.find(
            (item) => item.sectionType === "artistSpotlight"
          ) || null,
        rank:
          action.homeData?.find((item) => item.sectionId === "hZC")?.items ||
          null,
        chartSection:
          action.homeData?.find((item) => item.sectionId === "hZC")?.chart ||
          null,
      };
    default:
      return state;
  }
};

export default appReducer;
