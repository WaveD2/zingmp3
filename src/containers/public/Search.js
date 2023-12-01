import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { searchPath } from "../../utils/menuPaths";
import { useSelector } from "react-redux";
const Search = () => {
  const { keyword } = useSelector((state) => state.music);
  return (
    <div className="px-[59px]">
      <nav className="flex items-center h-12 w-full  text-[14px]  border-b border-b-red-100">
        <h3 className="pr-7 font-extrabold text-[20px] text-[#fff] border-r-[1px] border-[#d692d6]">
          Kết Quả Tìm Kiếm
        </h3>

        <div className="pl-7 items-center flex gap-10 font-semibold cursor-pointer text-[#ccc]">
          {searchPath.map((item) => (
            <NavLink
              key={item.path}
              to={`${item.path}?q=${keyword.replace(" ", "+")}`}
              className={({ isActive }) =>
                (isActive ? "border-b-rose-400 border-b-2 " : "") +
                "px-4 flex h-[50px] items-center  hover:text-[#fff]"
              }>
              {item.text}
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Search;
