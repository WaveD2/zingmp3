import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetArtist } from "../../apis";
import { SongPlayList, Sections, Artists } from "../../components";
import Video from "./Video";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const Singer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await apiGetArtist(params.singer);
      setData(res);
      dispatch(actions.setScrollArtist(true));
    };
    fetch();
  }, [params]);
  let items = data?.data?.data;

  console.log(items);
  return (
    <div>
      {/* Header */}
      <div className=" ">
        {items && (
          <div className="relative w-full z-[1] object-cover top-[-70px]">
            <img
              src={items?.cover}
              alt="img ca sĩ"
              className="h-[410px]  w-full object-cover "
            />
            <div className="absolute flex gap-5 bottom-[10%] left-[6%]">
              <img
                src={items?.thumbnail}
                alt="img"
                className="w-[140px] object-cover rounded-full"
              />
              <div className="flex flex-col justify-around">
                <h3 className=" text-7xl font-bold text-[#fff] ">
                  {items?.name}
                </h3>
                <h4 className="text-[14px] text-[#c2c1c1] font-bold">
                  {items?.follow} người quan tâm
                </h4>
              </div>
            </div>
          </div>
        )}

        <div className="mx-[59px]">
          <p className="mb-2 text-[#fff] font-bold text-xl leading-7">
            Bài hát nổi bật
          </p>
          <div className="flex flex-wrap items-center">
            {items?.sections[0].items
              ?.filter((item, index) => index < 6)
              .map((item, index) => (
                <SongPlayList
                  item={item}
                  sectionType={items?.sections[0]?.sectionType}
                />
              ))}
          </div>
        </div>

        <div className="mx-[59px] mt-12">
          <div className="">
            <Sections
              data={items?.sections[1]?.items}
              typeSection={items?.sections[1]?.sectionType}
              title={items?.sections[1]?.title}
            />
          </div>
        </div>

        <div className="mx-[59px] mt-12">
          <div className="flex justify-between mb-3 ">
            <h3 className="text-xl font-bold text-[#fff]">
              {items?.sections[3].title}
            </h3>
            <span className="text-xs text-[#ccc]">TẤT CẢ</span>
          </div>
          <div className=" flex gap-5">
            {items?.sections[3].items
              ?.filter((item, index) => index < 3)
              ?.map((item, index) => (
                <Video
                  key={index}
                  encodeId={item?.encodeId}
                  title={item?.title}
                  artistsNames={item?.artistsNames}
                  duration={item?.duration}
                  link={item?.link}
                  thumbnailM={item?.thumbnailM}
                  thumbnail={item?.thumbnail}
                />
              ))}
          </div>
        </div>

        <div className="mx-[59px] mt-12">
          <div className="">
            <Sections
              data={items?.sections[2]?.items}
              typeSection={items?.sections[2]?.sectionType}
              title={items?.sections[2]?.title}
            />
          </div>
        </div>

        <div className="mx-[59px] mt-12">
          <div className="">
            <Sections
              data={items?.sections[4]?.items}
              typeSection={items?.sections[4]?.sectionType}
              title={items?.sections[4]?.title}
            />
          </div>
        </div>

        <div className="mx-[59px] mt-12">
          <div className="">
            <Sections
              data={items?.sections[5]?.items}
              typeSection={items?.sections[5]?.sectionType}
              title={items?.sections[5]?.title}
            />
          </div>
        </div>

        <div className="mx-[59px] mt-12">
          <div className="flex justify-between mb-3 ">
            <h3 className="text-xl font-bold text-[#fff]">
              {items?.sections[6]?.title}
            </h3>
            <span className="text-xs text-[#ccc]">TẤT CẢ</span>
          </div>
          <div className="flex gap-3">
            {items?.sections[6]?.items
              .filter((item, index) => index < 5)
              .map((item, index) => (
                <Artists
                  thumbnail={item.thumbnail}
                  totalFollow={item.totalFollow}
                  name={item.name}
                  link={item.link}
                  spotlight={item.spotlight}
                  sectionType={items?.sections[6].sectionType}
                />
              ))}
          </div>
        </div>

        <div className="mx-[59px] mt-12">
          <h3 className="text-xl font-bold text-[#fff] mb-3">
            Về {items?.alias}
          </h3>
          <div className="flex gap-5">
            <div className="flex w-2/5">
              <img
                src={items?.thumbnailM}
                alt="img"
                className="h-[260px] w-full object-cover rounded-lg bg-no-repeat bg-top"
              />
            </div>
            <div className="flex w-2/5 flex-col">
              <p className="text-[#ccc] text-sm leading-6">
                {items?.biography.replaceAll("<br>", "\n").slice(0, 370)}
                ...
              </p>
              <div className="mt-7">
                <p className="text-lg font-bold text-[#fff] leading-6">
                  {items?.follow}
                </p>
                <p className="text-sm text-[#ccc]">Người quan tâm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singer;
