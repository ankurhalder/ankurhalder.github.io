import { Fragment, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// do not delete this commented code
// import { ToggleBar } from "../../pieces";
import PropTypes from "prop-types";

function Navbar() {
  const logoControls = useAnimation();
  const socialControls = useAnimation();

  const { ref: navbarRef, inView: navbarInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const socialVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 1.2,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (navbarInView) {
      const animateNavbar = async () => {
        await logoControls.start({
          opacity: 1,
          scale: 1,
          rotate: 360,
          transition: { duration: 1, type: "spring", stiffness: 200 },
        });
        socialControls.start((i) => socialVariants.animate(i));
      };
      animateNavbar();
    }
  }, [logoControls, socialControls, navbarInView]);

  return (
    <Fragment>
      <div className="navbar" ref={navbarRef}>
        <motion.img
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={logoControls}
          whileHover={{ scale: 1.1, rotate: 10 }}
          src="/apple-icon.png"
          alt="Logo"
        />
        {/* Do not delete  this commented code */}
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
              custom={index}
              aria-label={social.alt}
            >
              <img src={social.imgSrc} alt={social.alt} />
            </motion.a>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
