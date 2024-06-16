import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const springConfig = {
    damping: 25,
    stiffness: 120,
  };

  useSpring(cursorX, springConfig);
  useSpring(cursorY, springConfig);

  return (
    <motion.div
      className="cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        translateZ: 0,
        rotate: 45,
        scale: 1.2,
        backgroundColor: "transparent",
        border: "2px solid var(--text-color)",
        borderRadius: "50%",
        width: 20,
        height: 20,
        position: "fixed",
        zIndex: 999,
        pointerEvents: "none",
        top: 0,
        left: 0,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        transformOrigin: "center",
      }}
    />
  );
};

export default Cursor;
