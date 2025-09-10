import React, { useState } from 'react';

// Sample data for policies, guidelines, and reference materials
const resourceData = [
  { id: 1, title: 'Hospital Policies', type: 'Policy', file: 'hospital_policies.pdf' },
  { id: 2, title: 'Infection Control Guidelines', type: 'Guideline', file: 'infection_control_guidelines.pdf' },
  { id: 3, title: 'Medication Management Protocol', type: 'Protocol', file: 'medication_management_protocol.pdf' },
  // Add more resources as needed
];

const Resorse= () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const handleClearSelection = () => {
    setSelectedResource(null);
  };

  return (
    <div>
      <h1>Resource Library</h1>
      
      {selectedResource ? (
        <div>
          <h3>{selectedResource.title}</h3>
          <p>Type: {selectedResource.type}</p>
          <a href={selectedResource.file} target="_blank" rel="noopener noreferrer">Download</a>
          <button onClick={handleClearSelection}>Clear Selection</button>
        </div>
      ) : (
        <ul>
          {resourceData.map((resource) => (
            <li key={resource.id} onClick={() => handleResourceClick(resource)}>
              {resource.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Resorse;