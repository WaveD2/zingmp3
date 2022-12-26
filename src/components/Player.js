import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../utils/icons";
import * as actions from "../store/actions";
import moment from "moment";
import { toast } from "react-toastify";
import LoadingSong from "./LoadingSong";

const {
  FiMoreHorizontal,
  BsFillHeartFill,
  BsPauseCircle,
  FiRepeat,
  MdSkipNext,
  RiSkipBackMiniFill,
  BsShuffle,
  BsPlayCircle,
  BsMusicNoteList,
  RiMovieFill,
  GiMicrophone,
  HiOutlineVolumeUp,
  RiRepeatOneFill,
} = icons;
var intervalId;

const Player = () => {
  const { curSongId, isPlay, isPlayListAlbum, isSidebarRight } = useSelector(
    (state) => state.music
  );
  const [audio, setAudio] = useState(new Audio());
  const [songInfo, setSongInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [second, setSecond] = useState(0);
  const [isShuffe, setIsShuffe] = useState(false);
  const [isRepeat, setIsRepeat] = useState(0);
  const dispatch = useDispatch();
  const thumbRef = useRef();
  const trackRef = useRef();
  const volumLRef = useRef();
  const volumeRef = useRef();

  useEffect(() => {
    const fectchDetailSong = async () => {
      // lấy data
      setIsLoading(false);
      const [res1, res2] = await Promise.all([
        apis.apiGetDetaiSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);
      // console.log(res1, res2);
      setIsLoading(true);
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
        dispatch(actions.setCurSongData(res1.data.data));
      }
      // url - audio
      if (res2.data.err === 0) {
        audio.pause();
        // setSource(res2.data.data["128"]);
        setAudio(new Audio(res2.data.data["128"]));
        volumeRef.current.style.cssText = `right : ${50}%`;
      } else {
        audio.pause();
        thumbRef.current.style.cssText = `right : 100%`;
        setSecond(0);
        setAudio(new Audio());
        audio.src = "";
        dispatch(actions.setPlay(false));
        toast.warn(res2.data.msg);
      }
    };
    fectchDetailSong();
  }, [curSongId]);
  // logic handle play
  useEffect(() => {
    intervalId && clearInterval(intervalId);
    audio.pause();
    if (isPlay && thumbRef?.current) {
      audio.play();
      intervalId = setInterval(() => {
        let timeRunSong =
          Math.round((audio.currentTime * 10000) / songInfo?.duration) / 100;
        thumbRef.current.style.cssText = `right : ${100 - timeRunSong}%`;
        setSecond(Math.round(audio?.currentTime));
      }, 1000);
    }
  }, [audio, isPlay]);

  useEffect(() => {
    const handleEnded = () => {
      if (isShuffe) {
        handleShuffle();
      } else if (isRepeat) {
        isRepeat === 1 ? handleRepeatOne() : handleNextSong();
      } else {
        audio.pause();
        dispatch(actions.setPlay(false));
      }
    };
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audio, isShuffe, isRepeat, isPlay]);

  function handleRepeatOne() {
    audio.play();
  }

  function handleToggleIsPlay() {
    if (isPlay) {
      audio.pause();
      dispatch(actions.setPlay(false));
    } else {
      audio.play();
      dispatch(actions.setPlay(true));
    }
  }
  const handleLongMusic = (e) => {
    // tọa độ mà người dùng click vào
    // console.log(trackRef.current.getBoundingClientRect());

    const coordinates = trackRef.current.getBoundingClientRect();
    const longPercentMusic =
      Math.round(((e.clientX - coordinates.left) * 10000) / coordinates.width) /
      100;
    // console.log(longPercentMusic);
    audio.currentTime = (longPercentMusic * songInfo.duration) / 100;
    setSecond((longPercentMusic * songInfo.duration) / 100);
    thumbRef.current.style.cssText = `right : ${100 - longPercentMusic}%`;
  };

  const handleVolumeMusic = (e) => {
    const coordinates = volumLRef.current.getBoundingClientRect();
    const longPercentMusic =
      Math.round(((e.clientX - coordinates.left) * 10000) / coordinates.width) /
      100;
    audio.volume = longPercentMusic / 100;
    volumeRef.current.style.cssText = `right : ${100 - longPercentMusic}%`;
  };

  const handleNextSong = () => {
    if (isPlayListAlbum) {
      let currentSongIndex;
      isPlayListAlbum?.forEach((item, index) => {
        if (item.encodeId === curSongId) currentSongIndex = index;
      });
      // console.log(isPlayListAlbum);
      dispatch(
        actions.setCurSongId(isPlayListAlbum[currentSongIndex + 1].encodeId)
      );
      dispatch(actions.setPlay(true));
    }
  };
  const handlePrevSong = () => {
    let currentSongIndex;
    console.log(currentSongIndex);
    if (isPlayListAlbum) {
      isPlayListAlbum?.forEach((item, index) => {
        if (item.encodeId === curSongId) currentSongIndex = index;
      });
      if (currentSongIndex > 0) {
        dispatch(
          actions.setCurSongId(isPlayListAlbum[currentSongIndex - 1].encodeId)
        );
        dispatch(actions.setPlay(true));
      } else {
        toast.warn("Không thể chuyển bài hát");
      }
    }
  };

  const handleShuffle = () => {
    let randomIndex = Math.round(Math.random() * isPlayListAlbum.length - 1);
    dispatch(actions.setCurSongId(isPlayListAlbum[randomIndex].encodeId));
    dispatch(actions.setPlay(true));
  };

  return (
    <div className="bg-media px-5 h-full flex">
      <div className="w-[30%] flex-auto flex items-center gap-4">
        <img
          src={songInfo?.thumbnail}
          alt="img music"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="">
          <h3 className="text-[16px] leading-5 text-musicIdol ">
            {songInfo?.album?.title}
          </h3>
          <p className="text-[12px] text-[#c7c6c6]">
            {songInfo?.artists[0]?.alias}
          </p>
        </div>
        <div className="flex gap-3 text-[#fff] cursor-pointer">
          <span className="p-[5px] h-[26px]">
            <BsFillHeartFill />
          </span>
          <span className="p-[5px] h-[26px]">
            <FiMoreHorizontal />
          </span>
        </div>
      </div>

      <div className="w-[40%] flex-auto flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center  w-full justify-center">
          <span
            className={` p-[5px] leading-[20px] cursor-pointer
            ${isShuffe && "text-[#ccc]"}`}
            title="Bật phát ngẫu nhiên"
            onClick={() => setIsShuffe((prev) => !prev)}>
            <BsShuffle size={26} />
          </span>
          <span
            className={`${!isPlayListAlbum ? "text-[#fff]" : "cursor-pointer"}`}
            onClick={handlePrevSong}>
            <RiSkipBackMiniFill size={30} />
          </span>
          <span
            className="text-[#fff] p-[5px]  leading-[20px] cursor-pointer hover:text-pause"
            onClick={() => handleToggleIsPlay()}>
            {!isLoading ? (
              <LoadingSong />
            ) : isPlay ? (
              <BsPauseCircle size={40} />
            ) : (
              <BsPlayCircle size={40} />
            )}
          </span>
          <span
            className={`${!isPlayListAlbum ? "text-[#fff]" : "cursor-pointer"}`}
            onClick={handleNextSong}>
            <MdSkipNext size={30} />
          </span>
          <span
            className={`cursor-pointer  ${
              isRepeat ? " text-[#fff] " : "text-black"
            }`}
            title="Bật phát lại tất cả"
            onClick={() => setIsRepeat((prev) => (prev === 2 ? 0 : prev + 1))}>
            {isRepeat === 1 ? (
              <RiRepeatOneFill size={26} />
            ) : (
              <FiRepeat size={26} />
            )}
          </span>
        </div>
        {/* Audio */}
        <div className="w-full flex items-center gap-2">
          <span className=" text-titlePlayList text-[14px] w-9 ">
            {moment.utc(second * 1000).format("mm:ss")}
          </span>
          <div
            className="w-3/4 h-[4px] hover:h-[8px] cursor-pointer
           bg-[#6d6c6c] relative rounded-l-full  rounded-r-full
           "
            ref={trackRef}
            onClick={handleLongMusic}>
            <div
              className="absolute top-0 left-0 bottom-0
              bg-[#fff] cursor-pointer
             rounded-l-full rounded-r-full

            "
              ref={thumbRef}></div>
          </div>
          <span className="text-[#fff] font-semibold text-[14px]">
            {moment.utc(songInfo?.duration * 1000).format("mm:ss")}
          </span>
        </div>
      </div>

      <div className="w-[30%] flex-auto flex items-center ">
        <div className="flex w-full items-center justify-end gap-4 pr-7">
          <span
            className="text-[#fff] p-[6px] rounded-full bg-[#4444]"
            title="MV">
            <RiMovieFill size={20} />
          </span>
          <span
            className="text-[#fff] p-[6px] rounded-full bg-[#4444]"
            title="Xem lời bài hát">
            <GiMicrophone size={20} />
          </span>
          <div className="flex gap-2 items-center">
            <span
              className="text-[#fff] p-[6px] rounded-full bg-[#4444]"
              title="Điều chỉnh âm lượng">
              <HiOutlineVolumeUp size={20} />
            </span>
            <div
              className="w-[70px] h-[4px] hover:h-[8px] cursor-pointer
           bg-[#6d6c6c] relative rounded-l-full  rounded-r-full
           "
              ref={volumLRef}
              onClick={handleVolumeMusic}>
              <div
                className="absolute top-0 left-0 bottom-0
              bg-[#fff] cursor-pointer
             rounded-l-full   rounded-r-full

            "
                ref={volumeRef}></div>
            </div>
          </div>
        </div>
        <div className="flex-auto pl-4 flex items-center h-[70%] border-l-[#492f4e] border-l-2">
          <span
            className="cursor-pointer text-[#fff] "
            title="Danh sách phát"
            onClick={() => dispatch(actions.setSideBarRight(!isSidebarRight))}>
            <BsMusicNoteList
              size={30}
              className={` p-[6px] rounded-full ${
                isSidebarRight ? " bg-[violet] " : " bg-[#6d6c6c]"
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Player;
