import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Player, SidebarLeft, Header, SidebarRight } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import VideoClip from "./Video/VideoClip";
const Public = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { isSidebarRight, isVideo } = useSelector((state) => state.music);

  useEffect(() => {
    console.log(isVideo);
  }, [isVideo]);

  const handleScroll = (e) => {
    e.scrollTop !== 0 ? setIsScroll(true) : setIsScroll(false);
  };
  const header =
    "h-[70px] px-[58px] flex items-center text-[#ffffff] sticky z-50";
  const headerScroll =
    "h-[70px] px-[58px] flex items-center text-[#ffffff]  sticky z-50 bg-[#181638]  from-zinc-500";
  return (
    <div className=" h-screen bg-home flex flex-col overflow-hidden">
      <div className="w-full h-full flex-auto flex relative">
        <div className="w-[240px] flex-none bg-sidebar-Left">
          <SidebarLeft />
        </div>
        <div className="flex-auto  bg-home pb-[70px]">
          <div className={`${isScroll ? headerScroll : header}`}>
            <Header />
          </div>

          <Scrollbars
            style={{ width: "100%", height: "100%" }}
            onScrollFrame={handleScroll}>
            <Outlet scroll={isScroll} />
          </Scrollbars>
        </div>
        {isSidebarRight && (
          <div className="w-[330px] absolute bottom-0 right-0 top-0 z-50 bg-[#5d218c] h-max">
            <SidebarRight />
          </div>
        )}
      </div>

      <Player />

      <div
        className={`absolute top-0 left-0 right-0  z-50 bg-gradient-to-r from-slate-800	 to-gray-500 overflow-hidden
        ${isVideo ? "bottom-0" : "bottom-full"}`}>
        <VideoClip />
      </div>
    </div>
  );
};

export default Public;
