import React, { useState, useEffect } from "react";
import icons from "../utils/icons";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams } from "react-router-dom";
import path from "../utils/path";

const { FiSearch, HiXMark } = icons;

const SearchHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e) => {
    if (e.keyCode === 13) {
      dispatch(actions.search(keyword));
      navigate({
        pathname: `/${path.SEARCH}/${path.ALL_SEARCH}`,
        search: createSearchParams({
          q: keyword,
        }).toString(),
      });
      setKeyword("");
    }
  };
  return (
    <div
      className="max-w-[540px] h-[40px] py-[3px] px-[6px] rounded-[20px] border bg-input
        border-transparent bg
          text-sm relative flex justify-between items-center">
      <span className="text-[#c0b8c6]">
        <FiSearch size={24} />
      </span>
      <input
        className="h-[34px] py-[5px]  max-w-[460px] w-[460px] mx-[8px] border-none outline-none text-[#DDD9E1] bg-input
            inline-block line text-[14px]
            leading-[34px] "
        type="text"
        placeholder="Tìm kiếm bài hát , nghệ sĩ ,..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={handleSearch}
      />
      {keyword && (
        <span
          className="text-[#c0b8c6] cursor-pointer"
          onClick={() => setKeyword("")}>
          <HiXMark size={24} />
        </span>
      )}
    </div>
  );
};

export default SearchHeader;
