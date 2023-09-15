import { Link } from "react-router-dom"


const Button = ({url}) => {
  return (
    <Link to={`/${url}`}>
    <button className="w-[110px] p-3 flex items-center 
    justify-center rounded-xl hover:bg-opacity-75 bg-primary">
    See more
  </button>
  </Link>
  )
}

export default Button