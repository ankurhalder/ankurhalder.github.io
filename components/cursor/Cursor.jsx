import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [path, setPath] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const newPathSegment = `L${clientX - 10},${clientY - 10}`;

      setPath((prevPath) => prevPath + newPathSegment);
      setMousePosition({ x: clientX - 10, y: clientY - 10 });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <svg
        width="100%"
        height="100%"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 999,
        }}
      >
        <motion.path
          d={path}
          fill="transparent"
          stroke="var(--text-color)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.1 }}
        />
      </svg>
      <motion.div
        className="cursor"
        style={{
          translateX: mousePosition.x,
          translateY: mousePosition.y,
          translateZ: 0,
          backgroundColor: "transparent",
          border: "2px solid var(--text-color)",
          borderRadius: "50%",
          width: 20,
          height: 20,
          position: "fixed",
          zIndex: 1000,
          pointerEvents: "none",
          top: 0,
          left: 0,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          transformOrigin: "center",
        }}
      />
    </>
  );
};

export default Cursor;
