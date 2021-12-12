import { Link } from "react-router-dom";


const Welcome = props => {

  const div = {
    textAlign: "center",
    margin: "10px auto",
    width: "80%"
  }

  return(
    <div style={div}>
      <h1>Welcome!</h1>
      <Link to="/timeblocks">Get started</Link>
    </div>
  )
}


export default Welcome;
