
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await axios.get("https://hospitalmanagementserver-nqol.onrender.com/auth/logout", { withCredentials: true });
            navigate(response.data.redirect); 
        } catch (err) {
            if (err.response && err.response.status === 500) {
                console.error("Server error");
            } else {
                console.error("Check the network");
            }
        }
    };

    return { handleLogout };
};

export default useLogout; // Ensure this is a default export