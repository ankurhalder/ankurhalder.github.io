import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorTrail = useMotionValue(false);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const toggleCursorTrail = () => {
      cursorTrail.set(true);
      setTimeout(() => cursorTrail.set(false), 150);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", toggleCursorTrail);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", toggleCursorTrail);
    };
  }, [cursorX, cursorY, cursorTrail]);

  const springConfig = {
    damping: 25,
    stiffness: 120,
  };

  useSpring(cursorX, springConfig);
  useSpring(cursorY, springConfig);

  return (
    <>
      <motion.div
        className="cursor"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          translateZ: 0,
          rotate: 45,
          scale: cursorTrail.get() ? 1.2 : 1,
          backgroundColor: cursorTrail.get()
            ? "var(--primary-color)"
            : "transparent",
          border: "2px solid var(--text-color)",
          borderRadius: "50%",
          width: 35,
          height: 35,
          position: "fixed",
          zIndex: 999,
          pointerEvents: "none",
          top: 0,
          left: 0,
          boxShadow:
            "0px 0px 10px var(--shadow-medium-inverse) inset,0px 0px 20px -5px var(--shadow-medium-inverse)",

          transformOrigin: "center",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default Cursor;
