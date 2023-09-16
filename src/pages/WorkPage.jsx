import { Navbar } from "../components"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../constants"

const WorkPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-wrap items-center justify-center mt-[150px] p-5 gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default WorkPage