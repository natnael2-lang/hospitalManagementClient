import React from "react";
import "./ReferralForm.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="option-pane">
          <button onClick={createNew}>New</button>
          <button onClick={clearForm}>Clear</button>
          <button onClick={showRecent}>Recent</button>
        </div>

        <div className="form-container">
          <div className="main">
            <h1>Referral Form</h1>
            <form id="referralForm">
              {/* Patient Information */}
              <fieldset>
                <legend>Patient Information</legend>
                <label htmlFor="patientName">Patient Name:</label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  required
                />
                <br />
                <label htmlFor="patientID">Patient ID:</label>
                <input type="text" id="patientID" name="patientID" required />
                <br />
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
                <br />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                />
                <br />
              </fieldset>

              {/* Referring Physician Information */}
              <fieldset>
                <legend>Referring Physician Information</legend>
                <label htmlFor="physicianName">Physician Name:</label>
                <input
                  type="text"
                  id="physicianName"
                  name="physicianName"
                  required
                />
                <br />
                <label htmlFor="physicianID">Physician ID:</label>
                <input
                  type="text"
                  id="physicianID"
                  name="physicianID"
                  required
                />
                <br />
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" required />
                <br />
                <label htmlFor="physicianPhoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="physicianPhoneNumber"
                  name="physicianPhoneNumber"
                  required
                />
                <br />
                <label htmlFor="physicianEmail">Email:</label>
                <input
                  type="email"
                  id="physicianEmail"
                  name="physicianEmail"
                  required
                />
                <br />
                <label htmlFor="hospitalName">Hospital Name:</label>
                <input
                  type="text"
                  id="hospitalName"
                  name="hospitalName"
                  required
                />
                <br />
              </fieldset>

              {/* Referred Hospital */}
              <fieldset>
                <legend>Referred Hospital</legend>
                <label htmlFor="refHospitalName">Hospital Name:</label>
                <input
                  type="text"
                  id="refHospitalName"
                  name="refHospitalName"
                  required
                />
                <br />
                <label htmlFor="refDepartment">Department:</label>
                <input
                  type="text"
                  id="refDepartment"
                  name="refDepartment"
                  required
                />
                <br />
                <label htmlFor="serviceRequested">
                  Specific Service Requested:
                </label>
                <input
                  type="text"
                  id="serviceRequested"
                  name="serviceRequested"
                  required
                />
                <br />
                <label htmlFor="specialistName">Name of Specialist:</label>
                <input
                  type="text"
                  id="specialistName"
                  name="specialistName"
                  required
                />
                <br />
              </fieldset>

              {/* Referral Reason */}
              <fieldset>
                <legend>Referral Reason</legend>
                <label htmlFor="referralDate">Date:</label>
                <input
                  type="date"
                  id="referralDate"
                  name="referralDate"
                  required
                />
                <br />
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                ></textarea>
                <br />
                <label htmlFor="diagnoses">Diagnoses:</label>
                <textarea
                  id="diagnoses"
                  name="diagnoses"
                  rows="4"
                  required
                ></textarea>
                <br />
                <label htmlFor="urgencyLevel">Urgency Level:</label>
                <select id="urgencyLevel" name="urgencyLevel" required>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <br />
              </fieldset>

              <div className="submit-update">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  onClick={updateRecord}
                  className="update-button"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// JavaScript functions for interactivity
function createNew() {
  alert("Creating a new referral form...");
}

function clearForm() {
  document.getElementById("referralForm").reset();
}

function showRecent() {
  alert("Showing recent referral forms...");
}

function updateRecord() {
  alert("Updating referral record...");
}

export default App;
