import React, { useState, useEffect } from 'react';
function AnnouncementPage(){
    const [announcementData, setAnnouncementData] = useState(null); // Announcement data state
   const [isVisible, setIsVisible] = useState(true); // Announcement visibility state
   // Fetch announcements (optional)
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your actual API endpoint
        const data = await response.json();
        setAnnouncementData(data); // Update announcement data state
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    // Only fetch if announcementData is initially empty
    if (!announcementData) {
      fetchAnnouncements();
    }
  }, []); // Empty dependency array for fetching on component mount

  const handleDismiss = () => {
    setIsVisible(false); // Hide announcement
};
return(
    <div className={`announcement ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="announcement-section">
        {announcementData && ( // Display content only if data exists
          <>
            <h3 className="announcement-title">{announcementData[0].title}</h3> {/* Access title from the first post */}
            <p className="announcement-message">
              {announcementData[0].body} {/* Access body from the first post */}
            </p>
            {announcementData[0].id && ( // Check for optional dismiss button ID
              <button className="announcement-dismiss" onClick={handleDismiss}>
                Dismiss (Example ID: {announcementData[0].id})
              </button>
            )}
          </>
        )}
      </div>
    </div>
);
}
export default AnnouncementPage;