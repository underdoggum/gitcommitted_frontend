import { Link } from "react-router-dom";


const Timeblock = ({ timeblock }) => {
 
  if (timeblock) {
    return (
      <Link style={{textDecoration: "none", color: "#1976d2", fontWeight: "bold"}} to={`/timeblocks/${timeblock.id}`}>
        {timeblock.title ? timeblock.title : "Loading..."}
      </Link>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}


export default Timeblock;
