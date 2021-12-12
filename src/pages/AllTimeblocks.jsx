import Timeslots from "../components/Timeslots";


const AllTimeblocks = ({ timeblocks }) => {

  if (timeblocks) {
    return (
      <div>
        <Timeslots timeblocks={timeblocks} />
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}


export default AllTimeblocks;
