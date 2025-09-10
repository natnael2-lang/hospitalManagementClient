import React from 'react'
import "./css/profile.css"
import Unknownn from "../Componenet/asset/unknown.jpg"

const Profile = () => {
  return (
    <div className='profile-adm'>
        <h1>my Profile</h1>
        <div className='profile-detail'>
            <div className='admi-img'>
                <img src= {Unknownn}  alt="photo"/>
                <button>Change Photo</button>
            </div>
            <div className="detail-adm">
                <h1>Personal Information</h1>
                <h3>Full Name : </h3>
                <h3>ID :</h3>
                <h3>Data of Birth :</h3>
                <h3>Job Description:</h3> 
                <h1>Address</h1>
                <h3>Phone Number</h3> 
                <h3>email</h3>
                <h3>Emergency Contact</h3>
                <h3>sreet Address</h3>
        </div>
       
       
        
      </div>
    </div>
  )
}

export default Profile
