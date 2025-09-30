import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AdminNavbar from "./admin/navbar"; 
import MainHomePage from "./main-page/Home-page";
import Login from "./authentication/login";
import ForgotPassword from './authentication/forgetPassword';
import ChangePassword from './authentication/changePassword';
import Reception from "./Reception/App";
import Appointments from './doctor/appointments/appointment';
import AppointmentDetailsPage from './doctor/appointments/appointmentsDetail';
import Doctor from "./doctor/doctor";
import LabRequests from './doctor/appointments/components/labRequest';
import PatientRegistration from './Reception/PatientRegistration';
import AppointmentForm from './Reception/AppointmentForm';
import Hire from "./admin/humanResorce/hire"; 
import Fire from "./admin/humanResorce/fire"; 
import Profile from "./admin/humanResorce/fire"; 
import EmployeeDetails from "./admin/humanResorce/fire"; 
import LabTechnician from "./labTech/labRequests";
import PharmacyHome from "./Pharmacy/PharmaHome";
import Medicine from "./Pharmacy/Medicine";
import Prescriptions from "./Pharmacy/prescriptions";

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
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/changePassword" element={<ChangePassword />} />

                {/* Reception */}
                <Route path="/reception" element={<Reception />} />
                <Route path="/patientRegistration" element={<PatientRegistration />} />
                <Route path="/appointmentForm" element={<AppointmentForm />} />

                {/* Doctor */}
               
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/appointmentsDetail/:appointmentId" element={<AppointmentDetailsPage />} />
                <Route path="/doctor" element={<Doctor />} />
                <Route path="/labRequests" element={<LabRequests />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<Hire />} />
                <Route path="admin/fire" element={<Fire />} />
                <Route path="admin/profile" element={<Profile />} />
                <Route path="admin/employees" element={<EmployeeDetails />} />
                {/*labTchnician */}
                <Route path="/labTechnician" element={<LabTechnician />} />
                <Route path="/pharmacist" element={<PharmacyHome />} />
                <Route path="/prescriptions" element={<Prescriptions/>} />
                <Route path="/medicine" element={<Medicine/>} />

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