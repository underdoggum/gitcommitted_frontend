import { Link } from "react-router-dom";


const Timeblock = ({ timeblock }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/timeblocks/${timeblock.id}`}>
      <h1>{timeblock.title}</h1>
      </Link>
    </div>
  )
}


export default Timeblock;
