import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../../apis";
import * as actions from "../../store/actions";
import icons from "../../utils/icons";
import moment from "moment";
import { AudioLoading, Loading, SongPlayList, Artists } from "../../components";

const {
  BsArrowRepeat,
  BsPauseCircle,
  BsPlayCircle,
  BsFillHeartFill,
  FiMoreHorizontal,
  RiUserAddLine,
} = icons;

const Album = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [playListData, setPlayListData] = useState([]);
  const { isPlay, isLoading } = useSelector((state) => state.music);
  const { title, id } = useParams();
  useEffect(() => {
    const fetchDetailAlbum = async () => {
      dispatch(actions.setLoading(true));
      const response = await apis.apiGetDetailPlaylist(id);
      dispatch(actions.setLoading(false));

      if (response?.data.err === 0) {
        setPlayListData(response?.data?.data);
        dispatch(actions.setPlayListAlbum(response?.data?.data?.song?.items));
      }
    };
    fetchDetailAlbum();
  }, [id]);
  useEffect(() => {
    if (location.state?.playAlbum && playListData) {
      const randomSong =
        Math.round(Math.random() * playListData?.song?.items?.length) - 1;
      dispatch(
        actions.setCurSongId(playListData?.song?.items[randomSong]?.encodeId)
      );
      dispatch(actions.setPlay(true));
    }
  }, [id, playListData]);

  return (
    <div className="px-[58px] pt-[20px] relative">
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-media flex items-center justify-center h-full w-full">
          <Loading />
        </div>
      )}

      <div className="flex gap-8 w-full ">
        <div className="flex-none w-[300px] h-[569px] flex flex-col gap-y-4">
          <div
            className="w-[300px] overflow-hidden relative
          ">
            <img
              src={playListData?.thumbnailM}
              alt="img"
              className={`w-[300px] object-container  hover:scale-110  ${
                isPlay ? "rounded-full animate-rotate-center" : "rounded-md"
              }`}
            />
            <div
              className={`absolute top-0 left-0 right-0 bottom-0 hover:bg- overlay
            flex items-center justify-center ${isPlay && "rounded-full"}`}>
              {isPlay ? (
                <span className="p-2 border border-white rounded-full  ">
                  <AudioLoading />
                </span>
              ) : (
                <BsPlayCircle size={40} className="text-[#fff] " />
              )}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[20px] text-home font-bold leading-[30px]">
              {playListData?.title}
            </h3>
            <p className="text-[13px] leading-[21px] text-inFoPlayList font-semibold">
              {playListData?.song?.items[0].album?.releaseDate}
            </p>
            <h4 className="text-[13px] leading-[21px]  text-inFoPlayList font-semibold">
              {playListData?.artistsNames}
            </h4>
            <p className="text-[13px] leading-[21px] text-inFoPlayList font-semibold">
              {`${Math.round(playListData?.like / 1000)}`}K nguời yêu thích{" "}
            </p>
          </div>
          <div className="w-full">
            <button className="flex  mx-auto justify-center  items-center w-[175px] bg-[#ed2b91] my-2 rounded-2xl">
              {isPlay ? (
                <span className="flex  items-center  py-2  gap-x-2">
                  <span className="text-[#ebdddf] ">
                    <BsPauseCircle size={30} />
                  </span>
                  <span className="font-bold text-[#fff]">PHÁT NHẠC</span>
                </span>
              ) : (
                <span className="flex  items-center  py-2  gap-x-2">
                  <span className="text-[#ebdddf] ">
                    <BsPlayCircle size={30} />
                  </span>
                  <span className="font-bold text-[#fff]">TẠM DỪNG</span>
                </span>
              )}
            </button>
            <button className="flex  mx-auto justify-center  items-center gap-4 ">
              <span
                title="Thêm vào thư viện"
                className="p-2 text-[#fff] border border-[#fff] rounded-full leading-[34px] ">
                <BsFillHeartFill size={16} />
              </span>
              <span
                title="Khác"
                className="p-2 text-[#fff] border border-[#fff] rounded-full leading-[34px] ">
                {" "}
                <FiMoreHorizontal size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* List Song  */}
        <Scrollbars style={{ width: "100%", height: "480px" }}>
          <div className="flex-auto h-[569px]">
            <div className="w-full ">
              <span className="text-inFoPlayList text-[15px] leading-5">
                Lời tựa
              </span>
              <span className="text-[15px] leading-5 text-titlePlayList mx-2">
                {playListData?.description}
              </span>
            </div>
            <div className="">
              <div className="flex items-center justify-between p-[10px] text-inFoPlayList text-[14px] leading-[18px] font-medium ">
                <span className="flex items-center w-3/6">
                  <span className="inline-block mr-1">
                    <BsArrowRepeat />
                  </span>
                  <span className=""> BÀI HÁT</span>
                </span>
                <span className="flex-auto w-2/6">ALBUM</span>
                <span className="w-1/6 text-right">THỜI GIAN</span>
              </div>
              {playListData?.song?.items.map((item, index) => (
                <SongPlayList item={item} key={index} />
              ))}
            </div>
            <div className=" text-inFoPlayList text-[14px] leading-[18px] py-2">
              <span className="mr-5">{playListData?.song?.total}bài hát</span>
              <span className="">
                {moment
                  .utc(playListData?.song?.totalDuration * 1000)
                  .format("HH:mm:ss")}
              </span>
            </div>
          </div>
        </Scrollbars>
      </div>

      {/* NGHỆ SĨ QUAN TÂM */}
      <div>
        <h3 className="text-[20px] text-[#fff] font-bold my-[14px]">
          Nghệ Sĩ Tham Gia
        </h3>
        <div className="mt-[50px] flex gap-3 items-center">
          {playListData?.artists
            ?.filter((items, index) => index < 5)
            .map((item, i) => (
              <Artists
                thumbnail={item.thumbnail}
                totalFollow={item.totalFollow}
                name={item.name}
                key={i}
                link={item.link}
                typeAlbum={playListData?.isShuffle}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
