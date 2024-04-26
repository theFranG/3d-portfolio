import { Link } from "react-router-dom"
import { github } from "../../assets"


import PropTypes from "prop-types";

export const Button = ({url}) => {
  return (
    <Link to={`/work/${url}`}>
    <button 
    className="w-[110px] bg-primary flex items-center 
    justify-center rounded-xl hover:bg-opacity-75 p-3">
    See more
  </button>
  </Link>
  )
}

Button.propTypes = {
  url: PropTypes.string.isRequired
};

export const CVButton = ({description}) => {
  return (
    <button 
    className="bg-primary border border-white rounded-xl hover:bg-opacity-75 h-[50px] w-[120px]">
    {description}
  </button>
  )
}

CVButton.propTypes = {
  description: PropTypes.string.isRequired
};


export const GitButton = ({url}) => {
  return (
    <Link to={url} target="_blank">
    <button className="w-[155px] h-[42px] rounded-xl black-gradient 
                      flex items-center justify-center gap-2 hover:opacity-80">
      <img src={github} alt="source code" 
      className="w-[30px]"/>
      Source Code
  </button>
  </Link>
  )
}

GitButton.propTypes = {
  url: PropTypes.string.isRequired
};


export const BackButton = ({url}) => {
  return (
    <Link to={url}>
    <button className="w-[155px] h-[42px] rounded-xl white-gradient text-primary
                      flex items-center justify-center font-semibold gap-2 hover:opacity-80">
      Back
  </button>
  </Link>
  )
}

BackButton.propTypes = {
  url: PropTypes.string.isRequired
};
