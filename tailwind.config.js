/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    backgroundColor: {
      media: "#2E074C",
      home: "#37075d",
      sidebarLeft: "#411465",
      input: "#4b206e",
      overlay: "#575a5761",
      bgSection: "#605b5b5e",
    },
    textColor: {
      sidebarLeftActive: "#F1EEF4",
      sidebarLeft: "#dadada",
      home: "#ffffff",
      musicIdol: "#a4a4a4",
      pause: "#35c",
      inFoPlayList: "#8f75a4",
      titlePlayList: "#ebe7ef",
    },
    extend: {
      keyframes: {
        "slide-right": {
          "0%": {
            "-webkit-transform": "translateX(-500px);",
            transform: "translateX(-500px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0)",
          },
        },
        "slide-left": {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0)",
          },
        },
        "slide-left2": {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0)",
          },
        },
        "rotate-center": {
          "0%": {
            "-webkit-transform": "rotate(0);",
            transform: "rotate(0);",
          },
          "100%": {
            "-webkit-transform": "rotate(360deg);",
            transform: "rotate(360deg);",
          },
        },
        "rotate-imgSection": {
          "0% , 100%": {
            "-webkit-transform": "scale(1);",
            transform: "scale(1);",
          },
          "50%": {
            "-webkit-transform": "scale(1.2);",
            transform: "scale(1.2);",
          },
        },
        "transform-video": {
          "0%": {
            bottom: "100%",
          },
          "100%": {
            bottom: "0",
          },
        },
      },
      animation: {
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-left":
          "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-left2":
          "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "rotate-center": "rotate-center 5s linear infinite",
        "rotate-imgSection": "rotate-imgSection 2s linear ",
        "transform-video": "transform-video 2s linear ",
      },
      flex: {
        4: "4 4 0%",
        6: "6 6 0%",
      },
    },
  },
  plugins: [],
};
