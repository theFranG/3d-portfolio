import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { github } from "../assets";
import {Button} from "./ui/Button";
import { isMobile } from "../utils/motion";


const ProjectCard = ({
    index,
    url,
    name,
    description,
    image,
    source_code_link,
  }) => {

    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        whileHover={!isMobile() ? { scale: 1.05, transition: { duration: 0.2 }} : { scale: 1 }}
        className="bg-[#333333] p-5 rounded-2xl max-w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
  
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
  
        <div className="mt-5">
          <h3 className="text-secondary font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] h-[140px]">{description}</p>
        </div>
        <div className="w-full flex mt-3 items-end justify-center">
          <Button url={url} />
        </div>
      </motion.div>
    );
  };

  export default ProjectCard