import React, { useState } from 'react';

const InquiryHandler = () => {
  const [inquiry, setInquiry] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [showInquiry, setShowInquiry] = useState(false);

  const handleInputChange = (e) => {
    setInquiry(e.target.value);
    if (e.target.value.length > 200) {
      setError('Maximum character limit reached.');
    } else {
      setError('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setResponse('Thank you for your inquiry. We will get back to you shortly.');
  };

  const handleViewInquiry = () => {
    setShowInquiry(true);
  };

  return (
    <div>
      <h2>Handling Inquiries</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="inquiry">Your Inquiry:</label>
          <textarea
            id="inquiry"
            value={inquiry}
            onChange={handleInputChange}
            maxLength={200}
          />
        </div>
        <button type="submit">Submit Inquiry</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {showInquiry && (
        <div>
          <h3>View Inquiry</h3>
          <p>{inquiry}</p>
          <button onClick={() => setResponse('Response: ')}>Respond to Inquiry</button>
        </div>
      )}
      {response && <p style={{ color: 'green' }}>{response}</p>}
      {!showInquiry && <button onClick={handleViewInquiry}>View Inquiry</button>}
    </div>
  );
};

export default InquiryHandler;
