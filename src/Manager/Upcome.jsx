import React, { useState } from 'react';

const Upcome = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({
    eventTitle: '',
    eventDate: '',
    eventLocation: '',
    eventDescription: '',
    announcementTitle: '',
    announcementDate: '',
    announcementLocation: '',
    announcementDescription: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: formData.eventTitle,
      date: formData.eventDate,
      location: formData.eventLocation,
      description: formData.eventDescription,
    };
    setEvents([...events, newEvent]);
    setFormData({
      ...formData,
      eventTitle: '',
      eventDate: '',
      eventLocation: '',
      eventDescription: '',
    });
  };

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      title: formData.announcementTitle,
      date: formData.announcementDate,
      location: formData.announcementLocation,
      description: formData.announcementDescription,
    };
    setAnnouncements([...announcements, newAnnouncement]);
    setFormData({
      ...formData,
      announcementTitle: '',
      announcementDate: '',
      announcementLocation: '',
      announcementDescription: '',
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Upcoming Events and Announcements
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-600 mb-2">Location: {event.location}</p>
              <p className="text-gray-800">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Event</h2>
          <form onSubmit={handleEventSubmit}>
            <div className="mb-4">
              <label htmlFor="event-title" className="block text-gray-800 font-bold mb-1">
                Title:
              </label>
              <input
                type="text"
                id="event-title"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="event-date" className="block text-gray-800 font-bold mb-1">
                Date:
              </label>
              <input
                type="text"
                id="event-date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="event-location" className="block text-gray-800 font-bold mb-1">
                Location:
              </label>
              <input
                type="text"
                id="event-location"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="event-description" className="block text-gray-800 font-bold mb-1">
                Description:
              </label>
              <textarea
                id="event-description"
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Event
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Announcement</h2>
          <form onSubmit={handleAnnouncementSubmit}>
            <div className="mb-4">
              <label htmlFor="announcement-title" className="block text-gray-800 font-bold mb-1">
                Title:
              </label>
              <input
                type="text"
                id="announcement-title"
                name="announcementTitle"
                value={formData.announcementTitle}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="announcement-date" className="block text-gray-800 font-bold mb-1">
                Date:
              </label>
              <input
                type="text"
                id="announcement-date"
                name="announcementDate"
                value={formData.announcementDate}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="announcement-location" className="block text-gray-800 font-bold mb-1">
                Location:
              </label>
              <input
                type="text"
                id="announcement-location"
                name="announcementLocation"
                value={formData.announcementLocation}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="announcement-description" className="block text-gray-800 font-bold mb-1">
                Description:
              </label>
              <textarea
                id="announcement-description"
                name="announcementDescription"
                value={formData.announcementDescription}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Announcement
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Announcements</h2>
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {announcement.title}
              </h2>
              <p className="text-gray-600 mb-2">Date: {announcement.date}</p>
              <p className="text-gray-600 mb-2">
                Location: {announcement.location}
              </p>
              <p className="text-gray-800">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcome;