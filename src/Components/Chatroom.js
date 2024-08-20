import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import CSS file

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages every 2 seconds
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    if (message.trim() !== '') {
      try {
        await axios.post('http://localhost:3001/messages', { message });
        setMessage('');
        fetchMessages();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission if inside a form
      sendMessage();
    }
  };

  return (
    <div className="chat-room-container">
      <marquee>Welcome to the Chat Room, here you can talk</marquee>
      <div className="content-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="chat-input"
        />
        <button onClick={sendMessage} className="btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
