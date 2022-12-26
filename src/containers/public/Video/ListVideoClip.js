import React, { useState } from "react";
import icons from "../../../utils/icons";
import { Scrollbars } from "react-custom-scrollbars-2";

const { BsPlayCircle } = icons;
const ListVideoClip = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-full  ">
      <div className="mr-8 w-[70%] mt-4 ">
        <video
          src="https://vnso-zn-15-tf-mcloud-bf-s7-mv-zmp3.zmdcdn.me/4P5p2PgTkO0/eb75138785c36c9d35d2/b1849bce9a8b73d52a9a/360/Chay-Ngay-Di.mp4?authen=exp=1672133606~acl=/4P5p2PgTkO0/*~hmac=9f982014fe8d4f6cac0e6f897a5f51dc"
          controls
          className="w-full  rounded-lg "></video>
      </div>
      <div className="w-[30%] h-[494px] overflow-hidden z-50 mt-4 pb-[64px] rounded-md">
        <div className="h-[68px] bg-[#494646be]">
          <p className="text-center font-bold text-[18px] text-[#f8f8f8e7] leading-[68px]">
            Danh sách phát
          </p>
        </div>

        <Scrollbars style={{ width: "100%", height: "100%" }}>
          <div className="bg-[#1e1e1c96]">
            {items?.map((item, index) => (
              <div
                className="flex gap-3 pl-6 py-2 items-center hover:bg-overlay "
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                key={index}>
                <div className="relative">
                  <img
                    src={item?.thumbnail}
                    alt="img"
                    className={`w-[120px] h-[64px] object-cover rounded-md cursor-pointer 
                    }`}
                  />
                  {isActive && (
                    <span className="absolute top-5 left-[58px] text-[#ccc]">
                      <BsPlayCircle size={26} />
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-[16px] text-[#fff]">
                    {item?.title.length < 20
                      ? item?.title
                      : `${item?.title.slice(0, 20)}...`}
                  </p>
                  <p className=" text-[14px] text-[#ccc]">
                    {item?.artistsNames}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default ListVideoClip;
