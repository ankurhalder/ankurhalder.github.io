import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const springConfig = {
    damping: 20,
    stiffness: 100,
  };

  useSpring(cursorX, springConfig);
  useSpring(cursorY, springConfig);

  return (
    <motion.div
      className="cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        translateZ: 0, // Ensure there's no translation in Z-axis
        rotate: 45, // Rotate the cursor for a diagonal effect
        scale: 1.5,
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
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow for depth
        transformOrigin: "center", // Ensure rotation origin is centered
      }}
    />
  );
};

export default Cursor;
