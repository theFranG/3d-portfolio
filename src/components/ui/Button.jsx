import { Link } from "react-router-dom"
import { github } from "../../assets"


export const Button = ({url}) => {
  return (
    <Link to={`/${url}`}>
    <button className="w-[110px] p-3 bg-primary flex items-center 
                        justify-center rounded-xl hover:bg-opacity-75">
    See more
  </button>
  </Link>
  )
}

export const GitButton = ({url}) => {
  return (
    <Link to={url} target="_blank">
    <button className="w-[150px] h-[45px] rounded-xl black-gradient 
                      flex items-center justify-center gap-2 hover:opacity-80">
      <img src={github} alt="source code" 
      className="w-[30px]"/>
      Source Code
  </button>
  </Link>
  )
}

export const BackButton = ({url}) => {
  return (
    <Link to={url}>
    <button className="w-[150px] h-[45px] rounded-xl white-gradient text-primary
                      flex items-center justify-center font-semibold gap-2 hover:opacity-80">
      Back
  </button>
  </Link>
  )
}