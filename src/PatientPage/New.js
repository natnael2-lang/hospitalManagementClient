import './New.css'
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.module.css'
import axios from 'axios'
export default function New() {
    
    const [data, setPostData] = useState({})

    function handleChange(e) {
        setPostData({...data, [e.target.id]: e.target.value})
        console.log(data)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/posts", data)
            console.log(response)
            const newPostID = response.data.postId
            alert("Appointment successfully created with an ID: " + newPostID)
            setPostData({})
        }
        catch {
            console.log("there was an error sending the data")
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
            <label> Date of Birth </label>
            <div className='name-input'>
                <input id = 'dob' type = 'date' onChange={handleChange}></input>
            </div>
            <label>Phone Number</label>
            <div className='name-input'>
                <input type = 'text' id = 'phone_number' onChange = {handleChange}></input>
                <select id="gender" name="dropdown" onChange = {handleChange}>
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className='address'>
                <label>Street Address</label>
                <input type = 'text' id = 'address_one' onChange = {handleChange}></input>
                <label>Street Address line 2</label>
                <input type = 'text' id = 'address_two' onChange = {handleChange}></input>
            </div>
            <label>City</label>
            <div className='name-input'>
                <input type = 'text' id = 'city' onChange = {handleChange}></input>
                <input type = 'text' id = 'state' placeholder='state/province' onChange = {handleChange}></input>
            </div>
            <label>Email</label>
            <div className='name-input'>
                <input type = 'email' id = 'email' placeholder= 'eg: myname@example.com' onChange = {handleChange}></input>
            </div>
            <label>Have you ever visited our hospital before?</label>
            <div className='check'>
                <label>Yes</label>
                <input type='radio' id = 'visit_yes' name = 'yes-no' onChange = {handleChange}></input>
                <label>No</label>
                <input type = "radio" id = 'visit_no' name = 'yes-no' onChange = {handleChange}></input>
            </div>
            <label>What department would you like to get an appointment from?</label>
            <div className='name-input'>
                <select id="department" onChange = {handleChange}>
                    <option value="">Department</option>
                    <option>medicine</option>
                    <option>gynaecology</option>
                    <option>obstatrics</option>
                    <option>paediatrics</option>
                    <option>eye</option>
                </select>
            </div>
            <label>Preferred Appointment Date</label>
            <div className='name-input'>
                <input type = 'date' id = "app_date" onChange = {handleChange}></input>
            </div>
            <div className='but-cont'>
                <button onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}