import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar";
const Appointments = () => {
    const [appointments, setAppointment] = useState([]);
    const doctorId = useParams().doctorId;

    useEffect(() => {
        axios.get(`/doctor/${doctorId}/appointments`)
            .then((response) => setAppointment(response.data))
            .catch((error) => console.log("Error fetching appointments:", error));
    }, [doctorId]);

    return (
        <>
            <Navbar doctorId={doctorId} />
            {appointments.length === 0 ? (
                <div>No appointments</div>
            ) : (
                <div>
                    {appointments.map((appointment, ind) => (
                        <Link to={`/doctor/${appointment.doctorId}/appointments/${appointment.patientId}`} key={ind}>
                            <ul>
                                <li>{`${appointment.name}`}</li>
                                <li>{`${appointment.date}`}</li>
                                <li>{`${appointment.patientId}`}</li>
                            </ul>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}

export default Appointments;