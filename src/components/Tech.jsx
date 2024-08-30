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
      <div className="mt-14 flex gap-10">
      <a 
      href="/CV/FranG.pdf"
      download="FranG.pdf">
          <CVButton description={'English CV'}/>
      </a>
      <a
      href="/CV/FranG_ESP.pdf"
      download="FranG_ESP.pdf">
          <CVButton description={'Spanish CV'}/>
      </a>
      </div>
    </div>
  );
};

const NamedTech = SectionWrapper(Tech, "");
export default NamedTech;
