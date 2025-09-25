import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Appointments from "./appointments/appointment";


const Doctor = () => {
    const { doctorId } = useParams();
    const [doctorDetails, setDoctorDetails] = useState(null);
    const navigate=useNavigate()
    
    useEffect(() => {
        navigate(`/appointments/${doctorId}`)
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get(`https://hospitalmanagementserver-nqol.onrender.com/doctors/${doctorId}`);
                setDoctorDetails(response.data);
            } catch (error) {
                console.error("Error fetching doctor details", error);
            }
        };

        fetchDoctorDetails();
    }, []);

    return (
        <div>
            <Navbar doctorId={doctorId} />
            <h2 className="text-2xl font-bold mt-6">{doctorDetails?.name}</h2>
            <p className="text-lg">Specialty: {doctorDetails?.specialty}</p>
            <p className="text-lg">Experience: {doctorDetails?.experience} years</p>
           
        </div>
    );
};

export default Doctor;