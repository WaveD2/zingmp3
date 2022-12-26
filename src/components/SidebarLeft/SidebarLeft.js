import React from "react";
import { Logo } from "../../assets/icons/Logo";
import { sidebarMenuLeft } from "../../utils/menuPaths";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";

const notActiveStyle =
  "py-2 px-[25px] font-bold flex items-center gap-4 text-sidebarLeft text-[13px]";
const activeStyle =
  "py-2 px-[25px] font-bold flex items-center gap-4  text-[13px] text-sidebarLeftActive bg-[#542c74] border-l-2 border-l-rose-700 ";

const SidebarLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-[#411465]">
      <div
        className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center cursor-pointer text-[#fff]"
        onClick={() => navigate(path.HOME)}>
        <Logo />
      </div>
      <div className="flex flex-col">
        {sidebarMenuLeft.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }>
            {item.icon}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
