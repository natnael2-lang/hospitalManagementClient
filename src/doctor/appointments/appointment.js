import axios from "axios";
import { useEffect ,useState} from "react";
import { Link, useParams } from "react-router-dom";


const Appointments= ()=>{

    const [appointments,setAppointment]=useState([])
     const doctorId=useParams().doctorId
      useEffect(()=>{
          axios.get(`/doctor/${doctorId}/appointments`)
          .then((data)=>data.json())
          .then((data)=>setAppointment(data))
          .catch((error)=>console.log("error fetching appointments"))
        
      },[])

    return(
    
    <>
    {appointments?<div >no appointments</div>:<div>
                        {appointments.map((appointment,ind)=>{
                            <Link to={`/doctor/${appointment.doctorId}/appointments/${appointment.patientId}`}>
                            <ul key={ind} >
                                <li>{`${appointment.name}`}</li>
                                <li>{`${appointment.date}`}</li>
                                <li>{`${appointment.patientId}`}</li>
                            </ul>
                            </Link>
                           
                            })}
                    </div>}
    
    </>
    
)

}

export default Appointments;

