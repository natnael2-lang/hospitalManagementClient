import React from "react";
import "./PrescriptionFormPage";
import "./PrescriptionFormPage.css";

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
            <h1>Prescription Form</h1>
            <form id="prescriptionForm">
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

              {/* Prescription Details */}
              <fieldset>
                <legend>Prescription Details</legend>
                <label htmlFor="prescriptionDate">Date of Prescription:</label>
                <input
                  type="date"
                  id="prescriptionDate"
                  name="prescriptionDate"
                  required
                />
                <br />
                <label htmlFor="medications">Medications Details:</label>
                <textarea
                  id="medications"
                  name="medications"
                  rows="4"
                  required
                ></textarea>
                <br />
                <label htmlFor="dosageAmount">Dosage Amount:</label>
                <input
                  type="text"
                  id="dosageAmount"
                  name="dosageAmount"
                  required
                />
                <br />
                <label htmlFor="duration">Duration:</label>
                <input type="text" id="duration" name="duration" required />
                <br />
                <label htmlFor="instructions">Instructions:</label>
                <textarea
                  id="instructions"
                  name="instructions"
                  rows="4"
                  required
                ></textarea>
                <br />
              </fieldset>

              {/* Physician Information */}
              <fieldset>
                <legend>Physician Information</legend>
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
  alert("Creating a new prescription form...");
}

function clearForm() {
  document.getElementById("prescriptionForm").reset();
}

function showRecent() {
  alert("Showing recent prescription forms...");
}

function updateRecord() {
  alert("Updating medical record...");
}

export default App;
