import { Fragment, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { ToggleBar } from "../../pieces";
import PropTypes from "prop-types";
function Navbar() {
  const logoControls = useAnimation();
  const socialControls = useAnimation();

  const { ref: navbarRef, inView: navbarInView } = useInView({
    threshold: 0.1,
  });

  const socialVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
    },
    hover: {
      scale: 1.2,
    },
  };

  useEffect(() => {
    if (navbarInView) {
      const animateNavbar = async () => {
        await logoControls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, type: "spring", stiffness: 200 },
        });
        await socialControls.start("animate");
      };
      animateNavbar();
    }
  }, [logoControls, socialControls, navbarInView]);

  return (
    <Fragment>
      <div className="navbar none" ref={navbarRef}>
        <motion.img
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={logoControls}
          src="/apple-icon.png"
          alt=""
        />
        {/* <ToggleBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
        <div className="social">
          {[
            {
              href: "https://github.com/ankurhalder",
              imgSrc: "/social/github.svg",
              alt: "github",
            },
            {
              href: "https://www.linkedin.com/in/ankurhalder",
              imgSrc: "/social/linkedin.svg",
              alt: "linkedin",
            },
            {
              href: "https://www.facebook.com/ankur.roxx.9",
              imgSrc: "/social/facebook.svg",
              alt: "facebook",
            },
            {
              href: "https://www.instagram.com/halder_ankur",
              imgSrc: "/social/instagram.svg",
              alt: "instagram",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              variants={socialVariants}
              whileHover="hover"
              initial="initial"
              animate={socialControls}
              aria-label={social.alt}
            >
              <img src={social.imgSrc} alt={social.alt} />
            </motion.a>
          ))}
        </div>
        {/* <div></div> */}
      </div>
    </Fragment>
  );
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};
export default Navbar;
