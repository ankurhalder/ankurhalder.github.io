import { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ToggleBar } from "../../pieces";
function Navbar() {
  const logoControls = useAnimation();
  const socialControls = useAnimation();

  useEffect(() => {
    logoControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200 },
    });

    socialControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
    });
  }, [logoControls, socialControls]);

  const socialVariants = {
    hover: {
      scale: 1.2,
    },
  };

  return (
    <Fragment>
      <div className="navbar">
        <motion.img
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={logoControls}
          src="/apple-icon.png"
          alt=""
        />
        <ToggleBar></ToggleBar>
        <div className="social">
          <motion.a
            href="#"
            variants={socialVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            animate={socialControls}
          >
            <img src="/social/github.svg" alt="github" />
          </motion.a>
          <motion.a
            href="#"
            variants={socialVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            animate={socialControls}
          >
            <img src="/social/linkedin.svg" alt="linkedin" />
          </motion.a>
          <motion.a
            href="#"
            variants={socialVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            animate={socialControls}
          >
            <img src="/social/facebook.svg" alt="facebook" />
          </motion.a>
          <motion.a
            href="#"
            variants={socialVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            animate={socialControls}
          >
            <img src="/social/instagram.svg" alt="instagram" />
          </motion.a>
        </div>
        <div>{/* placeholver for sidenaav toogle */}</div>
      </div>
    </Fragment>
  );
}

export default Navbar;
