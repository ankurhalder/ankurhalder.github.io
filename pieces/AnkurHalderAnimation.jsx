import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1 },
};

const AnkurHalderAnimation = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
      {/* Letter A */}
      <motion.path
        d="M100 50L70 0H40L10 50H40L50 30H70L80 50H100Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter n */}
      <motion.path
        d="M170 0V50L220 0H250V100H220L170 50V100H140V0H170Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter k */}
      <motion.path
        d="M320 0V100H290V50L240 100H210L260 50L210 0H240L290 50L320 0Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter u */}
      <motion.path
        d="M390 0V80C390 90.54 398.46 99 409 99C419.54 99 428 90.54 428 80V0H458V80C458 97.6 442.6 113 425 113C407.4 113 392 97.6 392 80V0H390Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter r */}
      <motion.path
        d="M490 0V50L540 0H570V100H540L490 50V100H460V0H490Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter space */}
      <motion.path
        d="M620 0H650V100H620V0Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter H */}
      <motion.path
        d="M680 0V100H710V50H790V100H820V0H790V50H710V0H680Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter a */}
      <motion.path
        d="M880 0V50L930 0H960V100H930L880 50V100H850V0H880Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter l */}
      <motion.path
        d="M970 0V100H940V20H870V0H970Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter d */}
      <motion.path
        d="M1030 0V100H1060V50H1130V0H1030Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter e */}
      <motion.path
        d="M1140 0V100H1110V50H1040V0H1140Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
      {/* Letter r */}
      <motion.path
        d="M1200 0V50L1250 0H1280V100H1250L1200 50V100H1170V0H1200Z"
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />
    </svg>
  );
};

export default AnkurHalderAnimation;
