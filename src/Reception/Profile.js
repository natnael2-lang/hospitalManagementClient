import React, { useState ,useEffect} from 'react';
import {Link} from "react-router-dom"

const Profile =({formData1})=>{

const [editMode,setEditMode]=useState(false);
const [formData,setFormData]=useState({})


useEffect(()=>{
    setFormData(formData1)


},[])



 const toggleEdit = () => {
    setEditMode((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

 const  handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };
  

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            photoUrl: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    toggleEdit();
  };

  
    

    return (
      <div className="profile-container">
        <div className="profile">
          <div className="profile-photo">
            {formData.photoUrl ? (
              <img src={formData.photoUrl} alt="Profile" />
            ) : (
              <div className="empty-photo">No Photo</div>
              
              
            )}
          </div>
          
          {editMode ? (
            <form onSubmit={handleSubmit} className="edit-form">
              <div className="form-group">
                <label>
                  Name:
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Age:
                  <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Role:
                  <input type="text" name="role" value={formData.role} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Department:
                  <input type="text" name="department" value={formData.department} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Phone Number:
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Email:
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Bio:
                  <textarea name="bio" value={formData.bio} onChange={handleChange} />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Photo:
                  <input type="file" accept="image/*" onChange={handleFileChange} />
                </label>
              </div>
              <button type="submit">Save</button>
            </form>
          ) : (
            <div className="profile-details">
              <h2>{formData.name}</h2>
              <p>Age: {formData.age}</p>
              <p>Role: {formData.role}</p>
              <p>Department: {formData.department}</p>
              <p>Phone Number: {formData.phoneNumber}</p>
              <p>Email: {formData.email}</p>
              <p>Bio: {formData.bio}</p>
            </div>
          )}
          <div className="profile-actions">
            <button onClick={toggleEdit}>{editMode ? 'Cancel' : 'Edit Profile'}</button>
            <Link to="/changePassword">Change password</Link>
          </div>
        </div>
      </div>
    );
    
  }


export default Profile;
