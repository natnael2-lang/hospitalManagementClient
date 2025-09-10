import React,{useState} from 'react'

function Campaign() {
    const [campaignName, setCampaignName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');
  
    // Function to handle submitting the campaign
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Implement logic to handle submitting the campaign
      console.log('Submitted campaign:', {
        campaignName,
        startDate,
        endDate,
        status
      });
      // Reset the form
      setCampaignName('');
      setStartDate('');
      setEndDate('');
      setStatus('');
    };
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Campaign Page</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="block mb-2">
            Campaign Name:
            <input
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              required
            />
          </label>
          <label className="block mb-2">
            Start Date:
            <input
              type="date"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </label>
          <label className="block mb-2">
            End Date:
            <input
              type="date"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </label>
          <label className="block mb-2">
            Status:
            <select
              className="w-full px-2 py-1 border border-gray-300 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default Campaign