import './Appointment.css'
import { NavLink, Outlet } from 'react-router-dom'
export default function Appointment() {

    const buttonClicked = localStorage.getItem('buttonClicked');
    return (
        <>
        <div className='main-app'>
            <div className="app-container  bg-blue-500 text-white px-4 py-2 rounded-lg">
                <div className = "option-container  ">
                    <NavLink to = '/bookappointment/new' className='app-navigation  '>
                        New
                    </NavLink>
                    <NavLink to = '/bookappointment/reschedule' className='app-navigation  ' >
                        Reschedule 
                    </NavLink>
                    <NavLink to = '/bookappointment/cancel' className='app-navigation  ' >
                        Cancel 
                    </NavLink>
                </div>
            </div>
            <Outlet/>
            </div>
            </>
    )
}