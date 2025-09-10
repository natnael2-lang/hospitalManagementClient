import { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const resetForm = () => {
    setSelectedDepartment(null);
    setIsFormSubmitted(false);
    // Reset radio buttons by unchecking all
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
      button.checked = false;
    });
    // Reset textarea
    document.getElementById('improvement').value = '';
  };


  const PopupClose = () => {
    setShowPopup(false);
  };


  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const feedbackData = {
      department: selectedDepartment,
      feedback: {
        practitionerKnowledge: document.querySelector('input[name="knowledge"]:checked')?.value || '',
        practitionerKindness: document.querySelector('input[name="kindness"]:checked')?.value || '',
        practitionerCommunication: document.querySelector('input[name="communication"]:checked')?.value || '',
        waitingTime: document.querySelector('input[name="waiting"]:checked')?.value || '',
        hygiene: document.querySelector('input[name="hygiene"]:checked')?.value || '',
        qualityOfCare: document.querySelector('input[name="care"]:checked')?.value || '',
        experience: document.querySelector('input[name="experience"]:checked')?.value || ''
      },
      improvement: document.getElementById('improvement')?.value || ''
    };

    try {
      const response = await fetch('/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      const data = await response.json();
      console.log("Data from backend:", data);

      if (data.message === 'Feedback submitted successfully') {
        setShowPopup(true); // Display the popup
      
      setIsFormSubmitted(true); // Set form submitted status to true
      resetForm();
      } else {
        console.error('Error submitting feedback:', data.message);
        setErrorMessage(data.message || 'Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  

  const handleDepartmentSelection = (event) => {
    const selectedDept = event.target.value;
    setSelectedDepartment(selectedDept);
  };

  function OverAllform() {
    return(
      <div id="overall-satisfaction">
      <table className="feedback-table">
        <thead>
          <tr>
            <th rowSpan="1" id="head">
              Aspect
            </th>
            <th colSpan="6">Satisfaction Level</th>
          </tr>
          <tr>
            <th></th>
            <th>Very satisfied</th>
            <th>Satisfied</th>
            <th>Neutral</th>
            <th>Unsatisfied</th>
            <th>Very unsatisfied</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Practitioner Knowledge</td>
            <td>
              <input type="radio" name="knowledge" value="Very satisfied" />
            </td>
            <td>
              <input type="radio" name="knowledge" value="Satisfied" />
            </td>
            <td>
              <input type="radio" name="knowledge" value="Neutral" />
            </td>
            <td>
              <input type="radio" name="knowledge" value="Unsatisfied" />
            </td>
            <td>
              <input type="radio" name="knowledge" value="Very unsatisfied" />
            </td>
          </tr>
          <tr>
            <td>Practitioner Kindness</td>
            <td>
              <input type="radio" name="kindness" value="Very satisfied" />
            </td>
            <td>
              <input type="radio" name="kindness" value="Satisfied" />
            </td>
            <td>
              <input type="radio" name="kindness" value="Neutral" />
            </td>
            <td>
              <input type="radio" name="kindness" value="Unsatisfied" />
            </td>
            <td>
              <input type="radio" name="kindness" value="Very unsatisfied" />
            </td>
          </tr>
          <tr>
            <td>Practitioner Communication Skill</td>
            <td>
              <input
                type="radio"
                name="communication"
                value="Very satisfied"
              />
            </td>
            <td>
              <input type="radio" name="communication" value="Satisfied" />
            </td>
            <td>
              <input type="radio" name="communication" value="Neutral" />
            </td>
            <td>
              <input type="radio" name="communication" value="Unsatisfied" />
            </td>
            <td>
              <input
                type="radio"
                name="communication"
                value="Very unsatisfied"
              />
            </td>
          </tr>
          <tr>
            <td>Waiting Time</td>
            <td>
              <input type="radio" name="waiting" value="Very satisfied" />
            </td>
            <td>
              <input type="radio" name="waiting" value="Satisfied" />
            </td>
            <td>
              <input type="radio" name="waiting" value="Neutral" />
            </td>
            <td>
              <input type="radio" name="waiting" value="Unsatisfied" />
            </td>
            <td>
              <input type="radio" name="waiting" value="Very unsatisfied" />
            </td>
          </tr>
          <tr>
            <td>Hygiene</td>
            <td>
              <input type="radio" name="hygiene" value="Very satisfied" />
            </td>
            <td>
              <input type="radio" name="hygiene" value="Satisfied" />
            </td>
            <td>
              <input type="radio" name="hygiene" value="Neutral" />
            </td>
            <td>
              <input type="radio" name="hygiene" value="Unsatisfied" />
            </td>
            <td>
              <input type="radio" name="hygiene" value="Very unsatisfied" />
            </td>
          </tr>
          <tr>
            <td>Quality of Care</td>
            <td>
              <input type="radio" name="care" value="Very satisfied" />
            </td>
            <td>
              <input type="radio" name="care" value="Satisfied" />
            </td>
            <td>
              <input type="radio" name="care" value="Neutral" />
            </td>
            <td>
              <input type="radio" name="care" value="Unsatisfied" />
            </td>
            <td>
              <input type="radio" name="care" value="Very unsatisfied" />
            </td>
          </tr>
          <tr>
            <td>Rate your Experience</td>
            <td>
              <input type="radio" name="experience" value="Very satisfied" />
            </td>
            <td>
              <input type="radio" name="experience" value="Satisfied" />
            </td>
            <td>
              <input type="radio" name="experience" value="Neutral" />
            </td>
            <td>
              <input type="radio" name="experience" value="Unsatisfied" />
            </td>
            <td>
              <input
                type="radio"
                name="experience"
                value="Very unsatisfied"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     )
    }

  return (
    <>
    <div className="feedback-container">
      <div className="feedback-form">
        <div id="heading">
          <h1>Feedback Form</h1>
          <h2>Take a moment to fill the form</h2>
        </div>

        <form   onSubmit={handleSubmit}>
          <div id="tables">
            <div id="selection">
              <label htmlFor="department" className="LABEL">
                Choose a department:
              </label>
              <select id="department" name="department" onChange={handleDepartmentSelection}>
                <option value="Select">Select</option>
                <option value="Doctors">Doctors</option>
                <option value="Pharmacists">Pharmacists</option>
                <option value="Lab Technicians">Lab Technicians</option>
                <option value="Radiologists">Radiologists</option>
                <option value="Receptionist">Receptionist</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            <div id="form">{OverAllform()}</div>
            <div id="suggestion">
              <h2>How can we improve our service?</h2>
              <textarea
                id="improvement"
                name="improvement"
                placeholder="Type here..."
                rows="4"
                required
              ></textarea>
              <button className="mybut"  >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
   

       {showPopup && (
        <>
          <div className="overlay active" ></div>
          <div className="popup1 active" id="popup">
            <h1 id="doctorHeading" className="h1">Response recorded</h1>
            <p className="p">Thank you for your feedback!</p>
            <button type="button" onClick={PopupClose} className="button">
              Close
            </button>
          </div>
        </>
        
      )} 
      
    </>
  );
}

export default Feedback;
