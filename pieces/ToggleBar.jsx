import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ToggleBar = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.add("theme-dark");
    return () => {
      document.body.classList.remove("theme-dark");
    };
  }, []);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    onToggle && onToggle(!isDarkMode);
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");
  };

  return (
    <motion.div
      className={`toggle-bar ${isDarkMode ? "dark-mode" : ""}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMode}
      style={{ backgroundColor: isDarkMode ? "#000" : "gray" }}
    >
      <motion.div
        className="toggle-button"
        animate={{ marginLeft: isDarkMode ? "0px" : "30px" }}
      >
        {isDarkMode ? (
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="m34 7c5-.34 8.5 0 15.75 7s7.94 12 8.13 18.25a22.62 22.62 0 0 1 -6.38 16.47c-4.06 4-11.43 9.13-20.9 8.19s-13.6-3.27-18.24-8.91-6.19-14-6.29-17.45 1.69-9.06 6.07-14.12 8-8.43 21.86-9.43z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m30.57 9.24c4.19-.41 8.29-.53 11.88 1.31s8.94 8 9.81 9.06a7.75 7.75 0 0 1 1.28 2.19s-1.75 1.2-1.09 4.25 1.81 4.31 2.31 4.72a4.31 4.31 0 0 0 1.1.63s.31 6.43-1.38 9.87-6.48 9.53-10.78 11.16-11.88 5.06-19.7 1.43-10.14-7.06-13-12.86-3.11-11.64-1.71-15.85 5.91-9.75 9.57-12.25 8.53-3.35 11.71-3.66z"
                fill="#e6e4da"
              ></path>{" "}
              <path
                d="m54 23c.18 0 .78 1.78 1.25 3.66a6.62 6.62 0 0 1 .25 2.81 5.71 5.71 0 0 1 -1.91-2.85c-.45-1.76.17-3.62.41-3.62z"
                fill="#ffffff"
              ></path>{" "}
              <g fill="#1d1d1b">
                {" "}
                <path d="m46.42 15.65a10.62 10.62 0 0 1 2.78 2.35c-.06.22.09.81-.22.59s-2.75-2.09-2.81-2.25a.78.78 0 0 1 .25-.69z"></path>{" "}
                <path d="m46.32 18.86a25.44 25.44 0 0 1 3.47 3.14.88.88 0 0 1 -.18.59s-3.41-2.93-3.5-3.06.21-.67.21-.67z"></path>{" "}
                <path d="m45.82 21.24a24.12 24.12 0 0 1 3.35 2.76c0 .28-.1.66-.19.69s-3.72-2.28-3.66-2.56.32-.98.5-.89z"></path>{" "}
                <path d="m38.29 18a2.47 2.47 0 0 1 3.47 2.31 3.26 3.26 0 0 1 -4.31 3c-1.56-.85-1.78-4.31.84-5.31z"></path>{" "}
              </g>{" "}
              <path
                d="m38.52 18.78a1.71 1.71 0 0 1 2.4 1.6 2.26 2.26 0 0 1 -3 2.05c-1.06-.54-1.22-2.94.6-3.65z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="m15.2 20.8c.12 0 1.19.53 1.09.63a8.78 8.78 0 0 0 -2.06 3.47c-.5 1.87-.28 2.59-.59 2.62s-1 0-1.07-.19a11.23 11.23 0 0 1 .82-3.33c.53-1.2 1.47-3.07 1.81-3.2z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m24.57 20.71c2.58-.65 6.82.72 7.44 5.69s-5.12 7.5-9.15 5-5.86-8.79 1.71-10.69z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m24.94 22.57a4.16 4.16 0 0 1 5 3.85c.42 3.37-3.47 5.08-6.2 3.41s-3.92-5.97 1.2-7.26z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="m14.86 33.36c.55-.24 2.09 0 2.15 2.07s-1.31 3.22-2.81 2.84-2.28-3.62.66-4.91z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m15 34.49c.63-.2 1.35.53 1.25 1.44s-.9 1.93-1.87 1.56a1.65 1.65 0 0 1 .62-3z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="m30 39.9c1.38-.74 2.78-.29 3.13 1.21a2.5 2.5 0 0 1 -2.41 3.25 2.32 2.32 0 0 1 -.72-4.46z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m30.48 40.8a1.21 1.21 0 0 1 1.94 1.06 1.57 1.57 0 0 1 -2.16 1.54c-1.03-.5-1.09-1.82.22-2.6z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="m20.76 42.52c.13.13 0 .69.75 1.31s1.13.63 1.06.85-.12.47-.34.47a4.06 4.06 0 0 1 -1.5-.94c-.5-.47-1-1.5-.75-1.6a3.06 3.06 0 0 1 .78-.09z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m18.64 42.77a6.38 6.38 0 0 0 1.36 2.13c1 1 1.63 1.21 1.53 1.43s-.37.53-.59.44a14.45 14.45 0 0 1 -2.12-2c-.6-.69-1.22-1.69-1.07-1.84s.89-.16.89-.16z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m16.73 43.05a19.8 19.8 0 0 0 1.88 2.88c1.09 1.22 1.65 1.34 1.59 1.53a.47.47 0 0 1 -.47.37c-.31 0-1.66-1.22-2.62-2.34s-1.47-1.94-1.29-2.09a3.79 3.79 0 0 1 .91-.35z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m39.11 47.43c1.44-.09 2.09.56 1.71 2.22s-1.75 1.5-2.62 1-1.72-3.07.91-3.22z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m39.17 48.24a1 1 0 0 1 .83 1.44.87.87 0 0 1 -1.53 0 1 1 0 0 1 .7-1.44z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="m44.82 35.52c2.51-.59 3.72.19 4.41 2.84s-1.78 4.54-3.72 4.94-2.87.25-3.94-2.19-.21-4.78 3.25-5.59z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m44.54 36.46c.83-.26 2.63-.85 3.35 1.12s.62 3.19-1 4.19-2.32 1.23-3.89-.16-1.83-4.09 1.54-5.15z"
                fill="#ffffff"
              ></path>{" "}
              <path
                d="m52.76 32a10.61 10.61 0 0 1 2.16 2.5c0 .25-.16.62-.28.56a16.87 16.87 0 0 1 -2.41-2.37c.03-.23.31-.69.53-.69z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m51.32 33.49c0 .2 3 3.22 3 3.5s-.09.66-.21.59a37.28 37.28 0 0 1 -3.32-3.47c.07-.11.53-.71.53-.62z"
                fill="#1d1d1b"
              ></path>{" "}
              <path
                d="m51.17 36.4a21.79 21.79 0 0 1 2.72 3c0 .22-.16.75-.32.68s-3-2.9-3-3 .43-.72.6-.68z"
                fill="#1d1d1b"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--twemoji"
            preserveAspectRatio="xMidYMid meet"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#FFAC33"
                d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"
              ></path>
              <circle fill="#FFAC33" cx="18" cy="18" r="10"></circle>
            </g>
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
};

ToggleBar.propTypes = {
  onToggle: PropTypes.func,
};

export default ToggleBar;
