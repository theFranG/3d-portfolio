import { Navbar } from "../components";
import { projects } from "../constants";
import { styles } from "../styles";

import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const WorkPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <div className="mt-10">
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]">
            Explore my collection of projects. Each one of them is a testament
            to my passion for creating web applications. Here you will find
            examples of my work and dedication to this field.
          </p>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-7 mt-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkPage;
