import axios from "axios";
import React, { useState } from "react";

const VacancyForm = () => {
  // we can use a usestate Hook to manage its state;
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requiredQualifications, setRequiredQualifications] = useState("");
  const [preferredQualifications, setPreferredQualifications] = useState("");
  const [applicationInstructions, setApplicationInstructions] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [formSubmitted, setformSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      jobTitle,
      jobDescription,
      requiredQualifications,
      preferredQualifications,
      applicationInstructions,
      publishDate,
    });
    try {
      await axios.post("/vacancy", {
        jobTitle,
        jobDescription,
        requiredQualifications,
        preferredQualifications,
        applicationInstructions,
        publishDate,
      });
      alert("sunmitted successfully !!");
      setformSubmitted(true);
    } catch (error) {
      alert("Not submitted yet ");
      console.log(error);
    }
    {
      setTimeout(() => {
        setformSubmitted(false);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-32">
      <div className="mb-4">
        <label
          htmlFor="jobTitle"
          className="block text-gray-700 font-bold mb-2"
        >
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="jobDescription"
          className="block text-gray-700 font-bold mb-2"
        >
          Job Description
        </label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="requiredQualifications"
          className="block text-gray-700 font-bold mb-2"
        >
          Required Qualifications
        </label>
        <textarea
          id="requiredQualifications"
          value={requiredQualifications}
          onChange={(e) => setRequiredQualifications(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="preferredQualifications"
          className="block text-gray-700 font-bold mb-2"
        >
          Preferred Qualifications
        </label>
        <textarea
          id="preferredQualifications"
          value={preferredQualifications}
          onChange={(e) => setPreferredQualifications(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="applicationInstructions"
          className="block text-gray-700 font-bold mb-2"
        >
          Application Instructions
        </label>
        <textarea
          id="applicationInstructions"
          value={applicationInstructions}
          onChange={(e) => setApplicationInstructions(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="publishDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Publish Date (Optional)
        </label>
        <input
          type="date"
          id="publishDate"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mb-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Post vacancy
      </button>
      {formSubmitted && (
        <p className="bg-zinc-400 mt-3 px-4 py-2 flex-grow">
          form is submitted successfully man{" "}
        </p>
      )}
      {/* {!formSubmitted && (
        <p className="bg-zinc-400 mt-3 px-4 py-2 flex-grow">
          form is not successfully submitted try again man{" "}
        </p>
      )} */}
    </form>
  );
};
export default VacancyForm;
