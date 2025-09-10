import React,{useState} from "react";
import axios from 'axios'
import { Link } from "react-router-dom"; // Import Link component

const ImagingResult = () => {

  const [detail, setDetail] = React.useState({})
  function handleChange(e) {
    e.preventDefault()
    setDetail({...detail, [e.target.id]:e.target.value})
  }
  async function handleSubmit() {
    const formData = new FormData()
    formData.append('image', detail.image)
    formData.append('details', detail.details)
    await axios.post('/api/uploadRadImage', formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="imaging-result-page">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/imaging-request">Imaging Request</Link>
          </li>
          <li>
            <Link to="/imaging-result">Imaging result</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Upload Imaging Result</h1>
        <form id="imagingResultForm">
          <div>
            <label htmlFor="resultFile">Select Image File:</label>
            <input type="file" id="image" name="image" onChange = {e => handleChange(e)} />
          </div>
          <div>
            <label htmlFor="details">Details:</label>
            <textarea
              id="details"
              name="details"
              rows="5"
              cols="50"
              placeholder="Enter Imaging Result Details Here......"
              onChange = {e => handleChange(e)}
            ></textarea>
          </div>
          <button type="submit" onClick = {handleSubmit}>Submit</button>
        </form>
      </div>
      <footer>
        &copy; <span id="currentYear"></span> Radiologist Page
      </footer>
    </div>
  );
};

export default ImagingResult;
