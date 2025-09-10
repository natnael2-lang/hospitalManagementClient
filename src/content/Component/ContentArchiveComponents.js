import {useState} from 'react';

//The Header title for the page in general
const HeaderTitle = () => {
    return (
      <div className="header-title-container">
        <div className="header-title">
          <div className="line">Content Archive</div>
          <div className="line">and Retrieval</div>
        </div>
      </div>
    );
  };
  

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
      date: '',
      audience: '',
      type: ''
    });
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleFilterChange = (filterType, value) => {
      setFilters({ ...filters, [filterType]: value });
    };
  
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <div className="filters">
          <div className="filter">
            <label>Date of Post:</label>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => handleFilterChange('date', e.target.value)}
              className="filter-input"
            />
          </div>
  
          <div className="filter">
            <label>Audience:</label>
            <select value={filters.audience} onChange={(e) => handleFilterChange('audience', e.target.value)} className="filter-input">
              <option value="">All Departments</option>
              <option value="public">Public</option>
              <option value="all">All</option>
            </select>
          </div>
  
          <div className="filter">
            <label>Type:</label>
            <select value={filters.type} onChange={(e) => handleFilterChange('type', e.target.value)} className="filter-input">
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
        </div>
      </div>
    );
  };
    


const SearchResults = () => {
  const [selectedResult, setSelectedResult] = useState(null);
  

  // Sample list of previous contents (can be dynamic data from props or state)
  const searchResults = [
    { id: 1, title: 'The Importance of Hospital Management Systems', description: 'In this blog post, we explore the crucial role of hospital management systems (HMS) in improving efficiency and patient care within healthcare organizations. Learn how HMS streamline administrative tasks, enhance communication among healthcare professionals, and optimize resource allocation for better outcomes.In this blog post, we explore the crucial role of hospital management systems (HMS) in improving efficiency and patient care within healthcare organizations. Learn how HMS streamline administrative tasks, enhance communication among healthcare professionals, and optimize resource allocation for better outcomes.In this blog post, we explore the crucial role of hospital management systems (HMS) in improving efficiency and patient care within healthcare organizations. Learn how HMS streamline administrative tasks, enhance communication among healthcare professionals, and optimize resource allocation for better outcomes.', date: '2022-04-15', audience: 'all', contentType: 'text' },
    { id: 2, title: 'Transforming Patient Experience with Our HMS', description: 'Discover how XYZ Hospital implemented our advanced HMS to revolutionize patient experience. This case study highlights the challenges faced, solutions provided by the HMS, and measurable improvements in patient satisfaction scores and operational efficiency.', date: '2022-04-18', audience: 'public', contentType: 'video' },
    { id: 3, title: 'Enhancing Data Security and Compliance with HMS', description: 'Explore the key considerations for ensuring data security and compliance in healthcare settings using hospital management systems. This whitepaper discusses HIPAA compliance, data encryption methods, and best practices for safeguarding patient information.', date: '2022-04-20', audience: 'all-departments', contentType: 'text' },
    { id: 4, title: 'Getting Started with ABC Hospital Management System', description: 'Our comprehensive user guide provides step-by-step instructions for healthcare professionals to navigate and utilize the features of our hospital management system effectively. Learn how to schedule appointments, manage patient records, and generate reports seamlessly.Our comprehensive user guide provides step-by-step instructions for healthcare professionals to navigate and utilize the features of our hospital management system effectively. Learn how to schedule appointments, manage patient records, and generate reports seamlessly.', date: '2022-04-22', audience: 'public', contentType: 'image' },
    { id: 5, title: 'Benefits of Implementing a Hospital Management System', description: 'Visualize the advantages of adopting a hospital management system with our informative infographic. Discover how HMS improves operational efficiency, reduces administrative costs, and enhances patient outcomes in a visually engaging format.', date: '2022-04-25', audience: 'all-departments', contentType: 'text' },
    { id: 6, title: 'Mastering Billing and Revenue Cycle Management with HMS', description: 'Watch our video tutorial series to learn advanced techniques for billing and revenue cycle management using our hospital management system. Gain insights into claim processing, insurance verification, and revenue optimization strategies.Watch our video tutorial series to learn advanced techniques for billing and revenue cycle management using our hospital management system. Gain insights into claim processing, insurance verification, and revenue optimization strategies.Watch our video tutorial series to learn advanced techniques for billing and revenue cycle management using our hospital management system. Gain insights into claim processing, insurance verification, and revenue optimization strategies.Watch our video tutorial series to learn advanced techniques for billing and revenue cycle management using our hospital management system. Gain insights into claim processing, insurance verification, and revenue optimization strategies.', date: '2022-04-15', audience: 'all', contentType: 'text' },
    { id: 7, title: 'Transition to an Efficient Hospital Management System', description: 'Explore the crucial role of hospital management systems (HMS) in improving efficiency and patient care within healthcare organizations. Learn how HMS streamline administrative tasks, enhance communication among healthcare professionals, and optimize resource allocation for better outcomes.', date: '2022-04-08', audience: 'public', contentType: 'video' },
    { id: 8, title: 'Enhancing the Privacy of Our Esteemed Customers', description: 'Visualize the advantages of adopting a hospital management system with our informative infographic. Discover how HMS improves operational efficiency, reduces administrative costs, and enhances patient outcomes in a visually engaging format.Visualize the advantages of adopting a hospital management system with our informative infographic. Discover how HMS improves operational efficiency, reduces administrative costs, and enhances patient outcomes in a visually engaging format.Visualize the advantages of adopting a hospital management system with our informative infographic. Discover how HMS improves operational efficiency, reduces administrative costs, and enhances patient outcomes in a visually engaging format.Visualize the advantages of adopting a hospital management system with our informative infographic. Discover how HMS improves operational efficiency, reduces administrative costs, and enhances patient outcomes in a visually engaging format.', date: '2022-04-02', audience: 'all-departments', contentType: 'image' },
    { id: 9, title: 'New Discovery in the Awash Valley of Ethiopia - A Way Forward for Cancer Cure', description: 'Scientists have discovered extremely immune mammals in the lowland of the Awash Basin. Our comprehensive user guide provides step-by-step instructions for healthcare professionals to navigate and utilize the features of our hospital management system effectively. Learn how to schedule appointments, manage patient records, and generate reports seamlessly', date: '2022-04-01', audience: 'all', contentType: 'text' },
  ];

  const handleResultClick = (resultId) => {
    // Find the selected result based on resultId
    const selected = searchResults.find(result => result.id === resultId);
    // Set the selected result in state to trigger pop-up display
    setSelectedResult(selected);
  };

  const handleClosePopup = () => {
    // Clear the selected result to close the pop-up
    setSelectedResult(null);
  };

  const handleEditClick = () => {
    // Handle Edit button click (implementation details to be discussed)
    console.log('Edit button clicked');
    // Implement edit functionality here
  };

  const handleRepostClick = () => {
    // Handle Repost button click (implementation details to be discussed)
    console.log('Repost button clicked');
    // Implement repost functionality here
  };

  return (
    <div className="search-results-container">
      <h2 className="search-results-heading">Search Results</h2>
      <div className="search-results-list">
        {searchResults.map(result => (
          <div key={result.id} className="search-result-item" onClick={() => handleResultClick(result.id)}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            <div className="result-footer">
              <span className="result-date">Date: {result.date}</span>
              <span className="result-audience">Audience: {result.audience}</span>
              <span className="result-type">Type: {result.contentType}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Render the pop-up if selectedResult is not null */}
      {selectedResult && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedResult.title}</h2>
            <p>{selectedResult.description}</p>
            <div className="result-footer">
                <span>Date: {selectedResult.date}</span>
                <span>Audience: {selectedResult.audience}</span>
                <span>Type: {selectedResult.contentType}</span>
            </div>
            <div className="popup-buttons">
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleRepostClick}>Repost</button>
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



  export {HeaderTitle, SearchBar, SearchResults}; 