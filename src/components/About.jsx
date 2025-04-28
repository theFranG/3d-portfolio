import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import PropTypes from "prop-types";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full white-golden-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-primary rounded-[20px] py-5 px-12 
        min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a professional focused on the development and deployment of digital
        solutions. I specialize in web development, combining front-end work
        with React and back-end development with Node.js, integrating relational
        databases in a robust and efficient way. Throughout my journey, I have
        expanded my focus towards cloud infrastructure, working with AWS to
        manage virtual machines, automate processes, and deploy scalable
        systems. My goal is to deliver end-to-end solutions, from building to
        production, always adapting to the specific needs of each project and
        client.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
