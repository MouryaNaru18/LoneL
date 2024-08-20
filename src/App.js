import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from './Components/Chat';
import ChatRoom from './Components/Chatroom'; // Import the ChatRoom component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Chat />} /> 
          <Route path="/chat-room" element={<ChatRoom />} /> {/* Define the chat-room route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
