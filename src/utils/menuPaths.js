import icons from "./icons";
const { MdOutlineLibraryMusic, BsDisc, GiChart, RiChatFollowUpLine } = icons;
export const sidebarMenuLeft = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icon: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Khám Phá",
    end: "true",
    icon: <BsDisc size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: <GiChart size={24} />,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icon: <RiChatFollowUpLine size={24} />,
  },
];
export const searchPath = [
  {
    path: "tat-ca",
    text: "TẤT CẢ",
  },
  {
    path: "bai-hat",
    text: "BÀI HÁT",
  },
  {
    path: "playlist",
    text: "PLAYLIST/ALBUM",
  },
  {
    path: "artist",
    text: "NGHỆ SĨ/OA",
  },
  {
    path: "video",
    text: "MV",
  },
];
