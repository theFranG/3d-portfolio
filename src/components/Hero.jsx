import { styles } from "../styles";
import { motion } from "framer-motion";
import { subtitleVariants, titleVariants } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center w-full h-screen mx-auto mb-[-50px] md:mb-0">
      <div
        className={`${styles.paddingX} sm:relative md:absolute inset-0 justify-center
        max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5 h-full`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="circle" />
        </motion.div>
        <motion.div
          className="hidden md:flex flex-col justify-center items-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="w-5 h-5 rounded-full bg-[#D4AF37]" />
          <div className="w-1 sm:h-80 h-40 golden-gradient" />
        </motion.div>
        <div className="flex flex-col items-center justify-center md:items-start ">
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm <span className="text-[#D4AF37]">Franco</span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} md:mt-2 text-white-100`}
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            I am a web developer specialized in React, <br />
            focused on creating front-end applications.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
