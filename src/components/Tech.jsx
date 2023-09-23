import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { CVButton } from "./ui/Button";

const Tech = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <a 
      className="mt-14"
      href="/CV/Developer_FranG.pdf"
      download="/CV/Developer_FranG.pdf">
          <CVButton/>
      </a>
    </div>
  );
};

export default SectionWrapper(Tech, "");
