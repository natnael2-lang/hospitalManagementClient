import './New.css'
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.module.css'
import axios from 'axios'
export default function Reschedule() {

    const [updatedData, setUpdated] = useState({})
    const [upId, setID] = useState('')
    function handleChange(e) {
        setUpdated({...updatedData, [e.target.id]: e.target.value})
    }
    async function handleUpdate(e) {
        e.preventDefault()
        if (!upId || !updatedData) {
            alert('Please provide a valid ID and data to update.');
            return; 
          }
        
          try {
            console.log(updatedData)
            const response = await axios.put(`/api/updateApp/${upId}`, updatedData);
            console.log(response)
            alert('Appointment date and details updated successfully.')
        
          } catch (error) {
            console.log(error)
            alert('Please enter a valid information and try again later.')
          }

    }

    return (
        <div className="new-main">
            <label> Name </label>
            <div className='name-input'>
                <input type = 'text' id = 'first_name' placeholder='First Name' onChange = {handleChange}></input>
                <input type = 'text' id = 'middle_name' placeholder='Middle Name' onChange = {handleChange}></input>
                <input type = 'text' id = 'last_name' placeholder='Last Name' onChange = {handleChange}></input>
            </div>
            <label>What department would you like to get an appointment from?</label>
            <div className='name-input'>
                <select  id = "department" onChange = {handleChange}>
                    <option value="">Department</option>
                    <option>medicine</option>
                    <option>gynaecology</option>
                    <option>obstatrics</option>
                    <option>paediatrics</option>
                    <option>eye</option>
                </select>
            </div>
            <label>Appointment Number</label>
            <div className='name-input'>
                <input type = 'text' id = 'appnum' onChange = {e => setID(e.target.value)}></input>
            </div>
            <label>Previous Appointment Date</label>
            <div className='name-input'>
                <input type = 'date'></input>
            </div>
            <label>New Appointment Date</label>
            <div className='name-input'>
                <input type = 'date' id = "app_date" onChange = {handleChange}></input>
            </div>
            <div className='but-cont'>
                <button onClick = {handleUpdate}>
                    Submit
                </button>
            </div>
        </div>
    )
}