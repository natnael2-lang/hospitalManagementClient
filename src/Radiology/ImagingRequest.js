import React from "react";

import useState from 'react';
import useEffect from 'react';
import { Link } from "react-router-dom"; // Import Link component
import axios from 'axios'

const ImagingRequest = () => {
  const [request, setRequest] = useState(null)
  useEffect(() => {
    async function fetchRequests() {
      const response = await axios.get('/api/imagingRequest')
      const json = await response.json()

      if (response.ok) { //this means that we have succesfully fetched the data and want to do state manipulation locally
        console.log(json.data)
        setRequest(json.data)
      }
    }
    fetchRequests()
  },[])

  return (
    <div className="imaging-request-page">
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
        <h1>Imaging Requests</h1>
        <div className="imaging-requests">
          {/* Imaging request items will be dynamically added here */}
        </div>
      </div>
      <footer>
        &copy; <span id="currentYear"></span> Radiologist Page
      </footer>
    </div>
  );
};

export default ImagingRequest;
