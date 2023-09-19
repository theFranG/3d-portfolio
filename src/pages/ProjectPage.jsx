import { projects } from "../constants";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import { styles } from "../styles";
import { motion } from "framer-motion";
import React from "react";

const ProjectPage = () => {
  const { projectName } = useParams();
  const project = projects.find((p) => p.url === projectName);
  const description = project?.detailed_description.split("\n").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));

  return (
    <>
      <Navbar />
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <h2 className={`${styles.sectionHeadText} mt-10`}>{project.name}</h2>
        <motion.div
          className="w-full flex items-center justify-center pt-10 pb-5 md:p-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <a href={project.project_link} target="_blank" className="relative">
            <motion.img
              src={project.image}
              alt="project image"
              className="project-image-gradient p-[1px] rounded-[20px] shadow-card w-[750px]"
            />
            <motion.div
              className="absolute rounded-[19px] bg-black bg-opacity-50 items-center w-full bottom-0 h-full flex justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3
                className={`text-[26px] font-semibold p-1 absolute bottom-14`}
              >
                {project.name}
              </h3>
              <span className="absolute bottom-10">click to visit</span>
            </motion.div>
          </a>
        </motion.div>

        <div className="flex flex-col items-center">
          <h3 className="text-center text-[22px] text-secondary uppercase tracking-wider">
            about
          </h3>

          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center p-5">
          <h3 className="text-[20px] text-secondary uppercase tracking-wider">Technologies</h3>
          <div className="flex gap-3 items-center mt-2">
            {project.technologies.map((tec, index) => (
              <img
                key={index}
                src={tec}
                alt="technology used"
                className="w-[50px]"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
