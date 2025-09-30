import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
const Appointments = () => {
    const [appointments, setAppointment] = useState([]);
   

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_CURRENT_URL}/doctor/appointments`,{withCredentials:true})
            .then((response) => setAppointment(response.data.data))
            .catch((error) => console.log("Error fetching appointments:", error));
    }, []);

    return (
        <>
            <Navbar />
            {appointments.length === 0 ? (
                <div>No appointments</div>
            ) : (
                <div>
                    {appointments.map((appointment, ind) => (
                        <Link to={`/appointmentsDetail/${appointment._id}`} key={ind}  className="mb-4">
                            <ul className="flex justify-between ">
                                <li>{`${appointment.patientName}`}</li>
                                <li>{`${appointment.date}`}</li>
                                <li>{`${appointment.patientId}`}</li>
                                <li>{`${appointment.case}`}</li>
                            </ul>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}

export default Appointments;