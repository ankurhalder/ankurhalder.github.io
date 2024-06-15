/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

const useTilt = (active) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
};

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="slideBackground">
        <video
          src={slide.video}
          autoPlay
          loop
          muted
          title={slide.title}
          alt={`Video of ${slide.title}`}
          poster={slide.poster}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="slideContent">
        <video
          src={slide.video}
          autoPlay
          loop
          muted
          title={slide.title}
          alt={`Video of ${slide.title}`}
          poster={slide.poster}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          Your browser does not support the video tag.
        </video>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
