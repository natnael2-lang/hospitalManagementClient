import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_CURRENT_URL}/auth/logout`, { withCredentials: true });
            // Assuming the response contains a 'redirect' property
            if (response.data.redirect) {
                navigate(response.data.redirect);
            } else {
                console.error("No redirect URL provided in the response");
            }
        } catch (err) {
            if (err.response && err.response.status === 500) {
                console.error("Server error");
            } else {
                console.error("Network error or unexpected response:", err);
            }
        }
    };

    return { handleLogout };
};

export default useLogout;