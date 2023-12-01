import React, { useEffect, memo, useState } from "react";
import { apiGetChart } from "../../apis";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate } from "react-router-dom";
const Weekrank = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isWeekChart, seIsWeekChart] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await apiGetChart();
      seIsWeekChart(res);
    };
    fetchApi();
  }, []);
  const handlePlaySong = (encodeId, thumbnail, title, artistsNames, item) => {
    dispatch(actions.setPlayListAlbum(item));
    dispatch(actions.setCurSongId(encodeId));
    dispatch(
      actions.setSongRecent({ thumbnail, title, artistsNames, encodeId })
    );
    dispatch(actions.setPlay(true));
  };
  const handleListSongZingChart = (path, data) => {
    path?.link ? navigate(path?.link.split(".")[0]) : alert("lỗi", path?.link);
    dispatch(actions.setPlayListZingChart(data));
  };
  return (
    <div>
      <div className="mb-5 text-[32px] leading-8 font-black  text-[#fff]">
        Bảng Xếp Hạng Tuần
      </div>
      <div className=" flex gap-5">
        {isWeekChart &&
          Object?.entries(isWeekChart?.data?.data?.weekChart)?.map(
            (element, index) => (
              <div className="flex-1 rounded-md px-[10px] py-5" key={index}>
                <h3 className="text-[24px] text-[#fff] font-bold text-center mb-4">
                  {element[0] === "vn"
                    ? "Việt Nam"
                    : element[0] === "us"
                    ? "US-UK"
                    : element[0] === "korea"
                    ? "K-Pop"
                    : ""}
                </h3>
                <div className=" bg-[#411465] py-2 rounded-md h-full">
                  {element[1]?.items
                    ?.filter((item, index) => index < 10)
                    ?.map((item, index) => (
                      <div
                        className="flex gap-3 h-60px items-center px-[10px] py-[5px] 
                            cursor-pointer rounded-lg hover:bg-bgSection "
                        key={index}>
                        <span className="text-[32px] leading-8 font-black text-[#fff] w-1/6">
                          {index + 1}
                        </span>
                        <div
                          className="flex gap-1 w-4/6"
                          onClick={() =>
                            handlePlaySong(
                              item.encodeId,
                              item?.thumbnail,
                              item?.title,
                              item?.artistsNames,
                              item
                            )
                          }>
                          <img
                            src={item?.thumbnail}
                            alt="img"
                            className="w-[40px] object-cover rounded-lg"
                          />
                          <div className="flex flex-col">
                            <h3 className="text-sm font-medium leading-5 text-[#fff]">
                              {item?.title?.slice(0, 15)}...
                            </h3>
                            <h4 className="text-xs leading-4 text-[#ccc]">
                              {item?.artistsNames?.slice(0, 20)}
                            </h4>
                          </div>
                        </div>
                        <span className="w-1/6 text-[#fff]">
                          {moment.utc(item?.duration * 1000).format("mm:ss")}
                        </span>
                      </div>
                    ))}
                </div>
                <button
                  className="block mx-auto w-[123px] py-2 text-center text-[#ccc] font-bold text-[14px] leading-6 border border-r-emerald-50 rounded-2xl
                      odd:  hover:bg-bgSection my-3
                    "
                  onClick={() =>
                    handleListSongZingChart(
                      element[1],
                      isWeekChart?.data?.data?.weekChart
                    )
                  }>
                  Xem Thêm
                </button>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default memo(Weekrank);
