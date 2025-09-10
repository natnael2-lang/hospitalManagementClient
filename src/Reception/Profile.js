import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Profile = ({ formData1 }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(formData1 || {}); // Initialize with formData1

  useEffect(() => {
    setFormData(formData1); // Update state if formData1 changes
  }, [formData1]);

  const toggleEdit = () => {
    setEditMode(prevState => !prevState); // Toggle edit mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          photoUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here you could send formData to an API
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
            {Object.entries(formData).map(([key, value]) => (
              <div className="form-group" key={key}>
                <label>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                  {key === 'bio' ? (
                    <textarea name={key} value={value} onChange={handleChange} />
                  ) : (
                    <input type={key === 'age' ? 'number' : 'text'} name={key} value={value} onChange={handleChange} />
                  )}
                </label>
              </div>
            ))}
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