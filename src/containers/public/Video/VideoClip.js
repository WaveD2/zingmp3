import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetVideo } from "../../../apis";
import icons from "../../../utils/icons";
import ListVideoClip from "./ListVideoClip";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
const { BsFillHeartFill, BsMusicNoteList, HiXMark, FiMoreHorizontal } = icons;

const VideoClip = () => {
  const dispatch = useDispatch();
  const { id, title } = useParams();
  const [dataVideo, setDataVideo] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const res = await apiGetVideo(id);
      setDataVideo(res?.data.data);
    };
    fetch();
  }, [id]);

  return (
    <div className="mt-6">
      <div className="flex item-center  justify-between mx-6">
        <div className="flex gap-4">
          <div className="flex items-center gap-3">
            <img
              src={dataVideo?.artist.thumbnail}
              alt="avatar"
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
            <div className="">
              <h3 className="text-[18px] font-bold text-[#fff] ">
                {dataVideo?.title}
              </h3>
              <p className="text-[14px] text-[#ccc]">
                {dataVideo?.artistsNames}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="p-2 bg-[#545454] cursor-pointer rounded-full text-[#fff] text-center">
              <BsFillHeartFill size={20} />
            </span>
            <span className="p-2 bg-[#545454] cursor-pointer rounded-full text-[#fff] text-center">
              <BsMusicNoteList size={20} />
            </span>
            <span className="p-2 bg-[#545454] cursor-pointer rounded-full text-[#fff] text-center">
              <FiMoreHorizontal size={20} />
            </span>
          </div>
        </div>
        <p className="p-2 h-[44px] leading-10 bg-[#545454] cursor-pointer rounded-full text-[#fff] text-center">
          <HiXMark
            aria-hidden="true"
            size={28}
            onClick={() => dispatch(actions.setIsVideo(false))}
          />
        </p>
      </div>
      <div className=" mt-4 px-10 ">
        <ListVideoClip items={dataVideo?.recommends} />
      </div>
    </div>
  );
};

export default VideoClip;
