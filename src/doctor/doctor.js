import React, { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "./navbar";



const Doctor = () => {
    
    const [doctorDetails, setDoctorDetails] = useState(null);
  
    
    useEffect(() => {
       
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_CURRENT_URL}/doctor`,{
            withCredentials: true 
        });
        console.log(response)
                setDoctorDetails(response.data.data);
            } catch (error) {
                console.error("Error fetching doctor details", error);
            }
        };

        fetchDoctorDetails();
    }, []);

    return (
        <div>
            <Navbar  />
            <h2 className="text-2xl font-bold mt-6">{doctorDetails?.firstName}</h2>
            <p className="text-lg">Specialty: {doctorDetails?.specialization}</p>
           
           
        </div>
    );
};

export default Doctor;