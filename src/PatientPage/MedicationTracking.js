import React, { useEffect, useRef, useState } from "react";
import './MedicationTracking.css';
import NavbarP from "./NavBarp"
function Patient() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupDoc, setShowPopupDoc] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopupDoc = () => {
    setShowPopupDoc(true);
  };

  const closePopupDoc = () => {
    setShowPopupDoc(false);
  };

  const textareaRef = useRef(null);
  useEffect(() => {
    // Set scrollTop to 0 to ensure the cursor starts at the top
    if (textareaRef.current) {
      textareaRef.current.scrollTop = 0;
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <> <NavbarP/>
      <div className="contain">
        <div className="internal-container">
          <div className="video-section">
            <h1>Did you take your medicine today?</h1>
          </div>

          <div className="diseases">
            <div id="search-by-letter">
              <div id="message">Search medicines by their first letter</div>
              <div id="letters">
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>I</span>
                <span>J</span>
                <span>K</span>
                <span>L</span>
                <span>M</span>
                <span>N</span>
                <span>O</span>
                <span>P</span>
                <span>Q</span>
                <span>R</span>
                <span>S</span>
                <span>T</span>
                <span>U</span>
                <span>V</span>
                <span>W</span>
                <span>X</span>
                <span>Y</span>
                <span>Z</span>
              </div>
            </div>
            <div id="search-by-name">
              <h1>Search by their name</h1>
              <input type="text" placeholder="Search.."></input>
            </div>
          </div>

          <div className="feeling">
            <h1 id="greeting">How you feeling today?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit
            </p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <button onClick={openPopup} id="report">
              Report Progress
            </button>
          </div>

          <div className="medicine">
            <h1 id="patient-heading">Medical Consultation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
            </p>
            <button onClick={openPopupDoc} id="doctor">
              Doctor comment
            </button>
          </div>
        </div>
      </div>

      <div className={`overlay ${showPopup ? "show" : ""}`}></div>
      <div className={`popup ${showPopup ? "show" : ""}`} id="popup">
        <div id="heading">
          <h1>Medical History Form</h1>
        </div>

        <div id="checkBoxes">
          <h2>
            Check the conditions that apply to you in the past three days:
          </h2>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">
            Do you feel any better since starting the medication?
          </label>{" "}
          <br></br>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">
            Have you noticed any improvement in your symptoms?
          </label>{" "}
          <br></br>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">
            Are you experiencing any new side effects?
          </label>{" "}
          <br></br>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">
            Have you been taking your medication as prescribed?
          </label>{" "}
          <br></br>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">
            Have you missed any doses of your medication?
          </label>{" "}
          <br></br>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">
            Are you having any trouble taking your medication?
          </label>{" "}
          <br></br>
          <input type="checkbox" id="option1" name="option1" />
          <label htmlFor="option1">
            Are you experiencing any new side effects?
          </label>{" "}
          <br></br>
        </div>

        <h3>Are you experiencing unexpected symptoms? </h3>

        <div id="form">
          <textarea
            id="progress"
            name="progress"
            ref={textareaRef}
            placeholder="Describe briefly the symptoms"
          ></textarea>
          <button onClick={closePopup} id="submit">
            Submit
          </button>
        </div>
      </div>

      <button type="button">Submit</button>

      <div className={`overlay ${showPopupDoc ? "show" : ""}`}></div>
      <div className={`popup ${showPopupDoc ? "show" : ""}`} id="popup">
        <h1 id="doctorHeading">Doctor's Comment</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          perferendis suscipit officia recusandae, eveniet quaerat assumenda id
          fugit, dignissimos maxime non natus placeat illo iusto! Sapiente
          dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos
          molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae
          enim incidunt porro fuga ea.
        </p>
        <button type="button" onClick={closePopupDoc}>
          Close
        </button>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Patient />
    </div>
  );
}

export default App;
