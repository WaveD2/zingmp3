import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  Album,
  Home,
  Login,
  Person,
  Public,
  Search,
  SearchSong,
  SearchAll,
  Singer,
  SearchPlayList,
  SearchArtists,
  SearchVideo,
  VideoClip,
} from "./containers/public";
import path from "./utils/path";
import * as actions from "./store/actions";
import ZingChart from "./containers/public/ZingChart";
import ZingChartWeek from "./containers/public/ZingChartWeek";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHomeAction());
  }, []);

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<Person />} />
            <Route path={path.ZING_CHART} element={<ZingChart />} />
            <Route path={path.ZING_CHART_WEEK} element={<ZingChartWeek />} />
            <Route path={path.ALBUM__TITLE_ID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE_ID} element={<Album />} />
            <Route path={path.HOME_SINGER} element={<Singer />} />
            <Route path={path.VIDEO_CLIP} element={<VideoClip />} />
            <Route path={path.SEARCH} element={<Search />}>
              <Route path={path.HOME_SINGER} element={<Singer />} />
              <Route path={path.SONG_SEARCH} element={<SearchSong />} />
              <Route path={path.ALL_SEARCH} element={<SearchAll />} />
              <Route path={path.SEARCH_PLAYLIST} element={<SearchPlayList />} />
              <Route path={path.ARTISTS} element={<SearchArtists />} />
              <Route path={path.VIDEO} element={<SearchVideo />} />
            </Route>
            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}
export default App;
