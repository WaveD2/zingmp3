import React from "react";
import icons from "../utils/icons";
import SearchHeader from "./SearchHeader";
const { FiArrowRight, FiArrowLeft } = icons;

const Header = () => {
  return (
    <div className="w-full flex justify-between ">
      <div className="flex justify-start items-center ">
        <div className="flex text-[#c0b8c6]">
          <span className="inline-block mr-4">
            <FiArrowLeft size={24} />
          </span>
          <span className="inline-block mr-4">
            <FiArrowRight size={24} />
          </span>
        </div>
        <SearchHeader />
      </div>
    </div>
  );
};

export default Header;
