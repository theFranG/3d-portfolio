import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center w-full h-screen mx-auto mb-[-45px]">
      <div
        className={`${styles.paddingX} sm:relative md:absolute inset-0 justify-center
        max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5 h-full`}
      >
      <div className="circle"/>
        <div className="hidden md:flex flex-col justify-center items-center mt-5  ">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37]" />
          <div className="w-1 sm:h-80 h-40 golden-gradient" />
        </div>
        <div className="flex flex-col items-center justify-center md:items-start ">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#D4AF37]">Franco</span>
          </h1>
          <p className={`${styles.heroSubText} md:mt-2 text-white-100`}>
            I am a web developer specialized in React, <br/>
            focused on creating front-end applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
