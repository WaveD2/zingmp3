import React from "react";
import SectionItem from "./SectionItem";

const Sections = ({ data, typeSection, title }) => {
  let itemsArray =
    typeSection === "search"
      ? data
      : data?.filter((items, index) => index <= 4);
  return (
    <div
      className={` flex flex-col gap-5 ${
        typeSection === "search" ? "px-0" : "mt-12 pb-5 "
      }`}>
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-xl font-bold text-[#fff] hover:text-[pink]">
          {typeSection === "search" || typeSection === "playlist" ? (
            <span> Playlist</span>
          ) : (
            <span>{typeSection}</span>
          )}
        </h3>
        <span className="text-xs text-[#ccc]">TẤT CẢ</span>
      </div>

      <div className="w-full flex flex-row gap-6 flex-wrap">
        {itemsArray?.map((item, index) => (
          <SectionItem
            thumbnail={item.thumbnail}
            link={item.link}
            title={item.title}
            sortDescription={item.sortDescription || item.artistsNames}
            data={data}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
