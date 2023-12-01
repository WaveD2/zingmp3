import icons from "./icons";
const { CiStar, BsDisc, GiChart, RiChatFollowUpLine, GiMusicSpell } = icons;
export const sidebarMenuLeft = [
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
    path: "moi-phat-hanh",
    text: "BXH Nhạc mới",
    icon: <GiMusicSpell size={24} />,
  },

  {
    path: "top100",
    text: "Top 100",
    icon: <CiStar size={24} />,
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
