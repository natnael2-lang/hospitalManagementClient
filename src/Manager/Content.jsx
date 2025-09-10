import React,{useState} from 'react'

function Content() {
    const [content, setContent] = useState('');
    const [revision, setRevision] = useState('');
    const [status, setStatus] = useState('');
  
    // Function to handle submitting the content
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Implement logic to handle content submission
      console.log('Submitted content:', {
        content,
        revision,
        status
      });
      // Reset the form
      setContent('');
      setRevision('');
      setStatus('');
    };
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Content Approval Page</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="block mb-2">
            Content:
            <textarea
              className="w-full px-2 py-1 border border-gray-300 rounded"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </label>
          <label className="block mb-2">
            Revision:
            <textarea
              className="w-full px-2 py-1 border border-gray-300 rounded"
              rows="4"
              value={revision}
              onChange={(e) => setRevision(e.target.value)}
            ></textarea>
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
              <option value="approved">Approved</option>
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

export default Content