import { styles } from "../styles";
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import PropTypes from "prop-types";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#333333",
        color: "#f5f5f5",
        WebkitBoxShadow: '0 3px 0  #D4AF37',
        boxShadow: '0 3px 0  #D4AF37'}
      }
      contentArrowStyle={{ borderRight: "7px solid #D4AF37" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg, 
        WebkitBoxShadow: '0 0 0 3px #060606',
        boxShadow: '0 0 0 3px #060606'}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain '
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[#D4AF37] text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
        lineColor="#333333">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
const WrappedExperience = SectionWrapper(Experience, "work");
export default WrappedExperience;