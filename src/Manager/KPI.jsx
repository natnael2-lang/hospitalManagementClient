import React from 'react';

const KPIPage = () => {
  const patientSatisfactionRate = 85; // Example value
  const readmissionRate = 10; // Example value
  const qualityOfCareMetrics = [
    { name: 'Mortality Rate', value: 3.2 }, // Example values
    { name: 'Patient Safety Index', value: 89 }, // Example values
    { name: 'Hospital-Acquired Infection Rate', value: 1.5 }, // Example values
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Key Performance Indicators (KPIs)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Patient Satisfaction Rate */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Patient Satisfaction Rate
            </h2>
            <p className="text-3xl font-bold text-blue-500">
              {patientSatisfactionRate}%
            </p>
          </div>

          {/* Readmission Rate */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Readmission Rate
            </h2>
            <p className="text-3xl font-bold text-blue-500">
              {readmissionRate}%
            </p>
          </div>

          {/* Quality of Care Metrics */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Quality of Care Metrics
            </h2>
            <ul>
              {qualityOfCareMetrics.map((metric) => (
                <li
                  key={metric.name}
                  className="text-lg text-gray-800 mb-2 flex items-center"
                >
                  <span className="mr-2">{metric.name}:</span>
                  <span className="text-blue-500 font-bold">
                    {metric.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIPage;