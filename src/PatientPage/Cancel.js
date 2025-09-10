import './New.css'
import { useState } from 'react';
import axios from 'axios'
export default function Cancel() {

    const [AppId, setAppId] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        if (!AppId) {
            alert("You didn't fill an Appointment ID to Cancel.")
            return; // Prevent unnecessary API call if no ID is provided
          }
        try {
            await axios.delete(`/api/deleteApp/${AppId}`)
            alert('Appointment Cancelled Successfully')
            setAppId('')
        }
        catch {
            alert('Unsuccessful cancellation. Try again later, thank you.')
        }
    }
    return (
        <div className="new-main">
            <label> Name </label>
            <div className='name-input'>
                <input type = 'text' id = 'first_name' placeholder='First Name'></input>
                <input type = 'text' id = 'middle_name' placeholder='Middle Name'></input>
                <input type = 'text' id = 'last_name' placeholder='Last Name'></input>
            </div>
            <label>Appointment Number</label>
            <div className='name-input'>
                <input type = 'text' id = 'appnum' onChange = {e => setAppId(e.target.value)}></input>
            </div>
            <label>Appointment Date</label>
            <div className='name-input'>
                <input type = 'date'></input>
            </div>
            <div className='but-cont'>
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}