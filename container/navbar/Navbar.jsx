import { Fragment, useEffect, useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// @ do not delete this commented code
// import { ToggleBar } from "../../pieces";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
function Navbar({ isDarkMode, setIsDarkMode }) {
  const [triggerAnimations, setTriggerAnimations] = useState(false);
  const logoControls = useAnimation();
  const socialControls = useAnimation();

  const { ref: navbarRef, inView: navbarInView } = useInView({
    threshold: 0.1,
  });

  const socialVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        y: -20,
      },
      animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: i * 0.2,
          ease: "easeOut",
        },
      }),
      hover: {
        scale: 1.2,
        transition: { duration: 0.3, ease: "easeInOut" },
      },
    }),
    []
  );

  useEffect(() => {
    setTriggerAnimations(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarInView && !triggerAnimations) {
        setTriggerAnimations(true);
      } else if (!navbarInView && triggerAnimations) {
        setTriggerAnimations(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarInView, triggerAnimations]);

  useEffect(() => {
    const animateNavbar = async () => {
      await logoControls.start({
        opacity: 1,
        scale: 1,
        rotate: 360,
        transition: { duration: 1, type: "spring", stiffness: 200 },
      });
      socialControls.start((i) => socialVariants.animate(i));
    };

    if (triggerAnimations) {
      animateNavbar();
    } else {
      logoControls.set({ opacity: 0, scale: 0.5 });
      socialControls.set({ opacity: 0, y: 20 });
    }
  }, [triggerAnimations, logoControls, socialControls, socialVariants]);

  return (
    <Fragment>
      <div className="navbar" ref={navbarRef}>
        <motion.img
          className="logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={logoControls}
          whileHover={{ scale: 1.1 }}
          onTap={() => {
            logoControls.start({
              scale: 1.2,
              transition: { type: "spring", stiffness: 500, damping: 30 },
            });
            setTimeout(() => {
              logoControls.start({
                scale: 1,
                transition: { duration: 0.5 },
              });
            }, 500);
          }}
          onClick={() => {
            logoControls.start({
              scale: 1.2,
              transition: { type: "spring", stiffness: 500, damping: 30 },
            });
            setTimeout(() => {
              logoControls.start({
                scale: 1,
                transition: { duration: 0.5 },
              });
            }, 500);
          }}
          src="/apple-icon.png"
          alt="Logo"
        />

        {/* orange Do not delete  this commented code */}
        {/* <ToggleBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
        <div className="social">
          {[
            {
              href: "https://github.com/ankurhalder",
              imgSrc: "/social/github.svg",
              alt: "github",
              tooltip: "Github",
            },
            {
              href: "https://www.linkedin.com/in/ankurhalder",
              imgSrc: "/social/linkedin.svg",
              alt: "linkedin",
              tooltip: "LinkedIn",
            },
            {
              href: "https://www.facebook.com/ankur.roxx.9",
              imgSrc: "/social/facebook.svg",
              alt: "facebook",
              tooltip: "Facebook",
            },
            {
              href: "https://www.instagram.com/halder_ankur",
              imgSrc: "/social/instagram.svg",
              alt: "instagram",
              tooltip: "Instagram",
            },
          ].map((social, index) => (
            <Fragment key={index}>
              {/* <span className="tooltip">{social.tooltip}</span>
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
              </motion.a> */}
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
                <ul className="nav-wrapper">
                  <li className={`icon ${social.tooltip}`}>
                    <span className="tooltip">{social.tooltip}</span>
                    <img src={social.imgSrc} alt={social.alt} />
                  </li>
                </ul>
              </motion.a>
            </Fragment>
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
