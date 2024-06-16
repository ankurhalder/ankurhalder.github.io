import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorTrail = useMotionValue(false); // Track if cursor trail is active

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10); // Offset for cursor centering
      cursorY.set(e.clientY - 10); // Offset for cursor centering
    };

    const toggleCursorTrail = () => {
      cursorTrail.set(true);
      setTimeout(() => cursorTrail.set(false), 150); // Disable trail after 150ms
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", toggleCursorTrail); // Activate trail on click

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
      {/* Main cursor */}
      <motion.div
        className="cursor"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          translateZ: 0,
          rotate: 45,
          scale: cursorTrail.get() ? 1.2 : 1, // Scale up when trail is active
          backgroundColor: cursorTrail.get()
            ? "var(--primary-color)"
            : "transparent",
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Cursor trail */}
      {cursorTrail.get() && (
        <motion.div
          className="cursor-trail"
          style={{
            translateX: cursorX,
            translateY: cursorY,
            translateZ: 0,
            scale: 0.5,
            opacity: 0.4,
            backgroundColor: "var(--primary-color)",
            borderRadius: "50%",
            width: 20,
            height: 20,
            position: "fixed",
            zIndex: 998, // Behind main cursor
            pointerEvents: "none",
            top: 0,
            left: 0,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};

export default Cursor;
