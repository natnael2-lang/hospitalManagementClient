import { Link, useParams } from "react-router-dom"
const Doctor=()=>{
      const doctorId=useParams().doctorId
    return(
    <div>
         <p className="text-[26px]">{`id is ${doctorId}`}</p>
         <Link to={`/appointments/${doctorId}`}>Appointments</Link>
    </div>
    )
}

export default Doctor;