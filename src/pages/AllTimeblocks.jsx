import Timeblock from "../components/Timeblock";

const AllTimeblocks = ({ timeblocks }) => {


  return(
    <div>

      {timeblocks.map(timeblock => <Timeblock timeblock={timeblock} key={timeblock.id} />)}
    </div>
  )
}


export default AllTimeblocks;
