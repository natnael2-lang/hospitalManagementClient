import React, { useState } from 'react';

const Finance = () => {
  const totalRevenue = 1000000;
  const totalExpenses = 750000;
  const financialMetrics = [
    { name: 'Profit Margin', value: ((totalRevenue - totalExpenses) / totalRevenue) * 100 },
    { name: 'Return on Investment', value: (totalRevenue / totalExpenses) * 100 },
  ];

  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic to send the message to the finance officer
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Financial Overview
        </h1>

        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Financial Information:
          </h2>
          <p className="text-lg text-gray-800">
            Total Revenue: ${totalRevenue}
          </p>
          <p className="text-lg text-gray-800">
            Total Expenses: ${totalExpenses}
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Financial Performance Metrics:
          </h2>

          {financialMetrics.map((metric) => (
            <p key={metric.name} className="text-lg text-gray-800">
              {metric.name}: {metric.value}%
            </p>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Communication with Finance Officer:
          </h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <textarea
              className="border rounded-lg py-2 px-4 mb-4 resize-none"
              rows="4"
              placeholder="Type your message here"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Finance;