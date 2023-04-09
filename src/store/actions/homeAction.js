import * as apis from "../../apis";
import actionTypes from "./actionTypes";

//  use react-thunk
export const getHomeAction = () => async (dispatch) => {
  try {
    const response = await apis.getHome();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_HOME,
        homeData: response?.data.data.items,
      });
    } else {
      dispatch({
        type: actionTypes.GET_HOME,
        homeData: null,
      });
    }
  } catch (error) {
    console.log("lỗi ở action home.js");
    dispatch({
      type: actionTypes.GET_HOME,
      homeData: null,
    });
  }
};
getHomeAction();
