import { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ToggleBar } from "../../pieces";

function Navbar() {
  const logoControls = useAnimation();
  const socialControls = useAnimation();

  useEffect(() => {
    const animateNavbar = async () => {
      await logoControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, type: "spring", stiffness: 200 },
      });
      await socialControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
      });
    };
    animateNavbar();
  }, [logoControls, socialControls]);

  const socialVariants = {
    hover: {
      scale: 1.2,
    },
  };

  return (
    <Fragment>
      <div className="navbar none">
        <motion.img
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={logoControls}
          src="/apple-icon.png"
          alt=""
        />
        <ToggleBar /> {/* Placeholder for future side navigation toggle */}
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
              initial={{ opacity: 0, y: 20 }}
              animate={socialControls}
              aria-label={social.alt}
            >
              <img src={social.imgSrc} alt={social.alt} />
            </motion.a>
          ))}
        </div>
        <div>{/* Placeholder for side nav toggle */}</div>
      </div>
    </Fragment>
  );
}

export default Navbar;
