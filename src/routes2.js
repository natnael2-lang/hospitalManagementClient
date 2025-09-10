import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AdminNavbar from "./admin/navbar"; // Adjust the import based on your file structure
import MainHomePage from "./main-page/Home-page";
import PatientSignUp from "./authentication/signUp/patient";
import Login from "./authentication/login";
import ForgotPassword from './authentication/forgetPassword';
import ChangePassword from './authentication/changePassword';
import Reception from "./Reception/App";
import Doctor from './doctor/doctor';
import Appointments from './doctor/appointments/appointment';
import AppointmentDetailsPage from './doctor/appointments/appointmentsDetail';
import Doctor1 from "./DoctorPage/DoctorPage";
import LabRequests from './doctor/appointments/components/labRequest';
import PatientRegistration from './Reception/PatientRegistration';
import AppointmentForm from './Reception/AppointmentForm';
import Hire from "./admin/humanResorce/hire"; // Your Hire component
import Fire from "./admin/humanResorce/fire"; // Your Fire component
import Finance from "./admin/finance/finance"; // Your Finance component
import Profile from "./admin/humanResorce/fire"; // Your Profile component
import EmployeeDetails from "./admin/humanResorce/fire"; // Your EmployeeDetails component

const App = () => {
    const location = useLocation();
    
    // Determine if the current route is an admin route
    const isAdminRoute = [
        '/admin/hire',
        '/admin/fire',
        '/admin/finance',
        '/admin/profile',
        '/admin/employees',
    ].includes(location.pathname);

    return (
        <div >
            {/* Conditionally render the navbar */}
            {isAdminRoute && <AdminNavbar />}
            <Routes>
                {/* Main Pages */}
                <Route path="/" element={<MainHomePage />} />

                {/* Authentication */}
                <Route path="/patientSignUp" element={<PatientSignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/changePassword" element={<ChangePassword />} />

                {/* Reception */}
                <Route path="/reception" element={<Reception />} />
                <Route path="/patientRegistration" element={<PatientRegistration />} />
                <Route path="/appointmentForm" element={<AppointmentForm />} />

                {/* Doctor */}
               
                <Route path="/appointments/:doctorId" element={<Appointments />} />
                <Route path="/appointmentsDetail" element={<AppointmentDetailsPage />} />
                <Route path="/doctor" element={<Doctor1 />} />
                <Route path="/labRequests" element={<LabRequests />} />

                {/* Admin Routes */}
                <Route path="admin/hire" element={<Hire />} />
                <Route path="admin/fire" element={<Fire />} />
                <Route path="admin/finance" element={<Finance />} />
                <Route path="admin/profile" element={<Profile />} />
                <Route path="admin/employees" element={<EmployeeDetails />} />

                {/* Default Route */}
                <Route path="*" element={<div><h1>404 - Not Found</h1></div>} />
            </Routes>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;