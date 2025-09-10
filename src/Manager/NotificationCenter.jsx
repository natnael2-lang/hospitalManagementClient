import React, { useState } from 'react';

const NotificationCenter = () => {
  const [messages, setMessages] = useState([]);
  const roles = ['doctor', 'employee manager', 'finance', 'content creator', 'receptionist'];

  const sendMessage = (recipient, subject, content) => {
    const newMessage = {
      id: messages.length + 1,
      recipient,
      subject,
      content,
      timestamp: new Date().toLocaleString(),
      read: false
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notification Center</h1>
      <MessageForm roles={roles} sendMessage={sendMessage} />
      <MessageList messages={messages} />
    </div>
  );
};

const MessageForm = ({ roles, sendMessage }) => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(recipient, subject, content);
    setRecipient('');
    setSubject('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="recipient" className="block mb-2">Recipient:</label>
          <select
            id="recipient"
            value={recipient}
            onChange={e => setRecipient(e.target.value)}
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select Recipient</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="subject" className="block mb-2">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
      <label htmlFor="content" className="block mt-4 mb-2">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full p-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Messages</h2>
      {messages.length === 0 ? (
        <p>No messages</p>
      ) : (
        <ul className="space-y-4">
          {messages.map(message => (
            <li key={message.id} className="border border-gray-300 p-4 rounded">
              <p className="mb-2">
                <strong>To:</strong> {message.recipient}
              </p>
              <p className="mb-2">
                <strong>Subject:</strong> {message.subject}
              </p>
              <p className="mb-2">
                <strong>Content:</strong> {message.content}
              </p>
              <p className="mb-2">
                <strong>Timestamp:</strong> {message.timestamp}
              </p>
              <p>
                <strong>Status:</strong> {message.read ? 'Read' : 'Unread'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationCenter;