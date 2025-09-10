import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Home from "./Home";
import ImagingRequest from "./ImagingRequest";
import ImagingResult from "./ImagingResult";

function Routeess() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes component */}
        <Route exact path="/" element={<Home />} /> {/* Use element prop */}
        <Route path="/imaging-request" element={<ImagingRequest />} />{" "}
        {/* Use element prop */}
        <Route path="/imaging-result" element={<ImagingResult />} />{" "}
        {/* Use element prop */}
      </Routes>
    </Router>
  );
}

export default Routeess;
