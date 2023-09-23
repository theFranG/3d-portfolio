import { projects } from "../constants";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
import { styles } from "../styles";
import { motion } from "framer-motion";
import React from "react";

import { BackButton, GitButton } from "../components/ui/Button";
import Footer from "../components/Footer";

const ProjectPage = () => {
  const { projectName } = useParams();
  const project = projects.find((p) => p.url === projectName);
  const description = project?.detailed_description
    .split("\n")
    .map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));

  return (
    <>
      <Navbar />
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <h2 className={`${styles.sectionHeadText} mt-5`}>{project.name}</h2>
        <motion.div
          className="w-full flex items-center justify-center pt-10 pb-5 md:p-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <a href={project.project_link} target="_blank" className="relative">
            <motion.img
              src={project.image}
              alt="project image"
              className="w-[750px] project-image-gradient  
                        rounded-[20px] shadow-card p-[1px]"
            />
            <motion.div
              className="absolute w-full h-full rounded-[19px] bg-opacity-50 
                        items-center bottom-0 flex bg-black justify-center"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}>
              <h3
                className={`text-[26px] font-semibold p-1 absolute bottom-14`}
              >
                {project.name}
              </h3>
              <span className="absolute hidden md:block bottom-10">click to visit</span>
              <span className="absolute hidden sm:block md:hidden bottom-10">visit website</span>
              <span className="absolute sm:hidden bottom-10">tap to visit</span>
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
        <div className="flex flex-col gap-10 sm:flex-row justify-between items-center sm:items-end sm:px-0 mt-16 md:px-16 md:p-16 md:mx-10 pr-1">
          <div className="flex flex-col items-center">
            <h3 className="text-[20px] text-secondary uppercase tracking-wider">
              Technologies
            </h3>
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
          <div className="flex gap-2 xs:mt-5 sm:mt-0">
            <BackButton url='/work'/>
            <GitButton url={project.source_code_link} />
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default ProjectPage;
