import React from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css'; // Ensure the CSS is imported

const Chat = () => {
  const navigate = useNavigate();

  const goToNewPage = () => {
    navigate("/chat-room");
  };

  return (
    <div className="center-button-container">
      <button onClick={goToNewPage} className="center-btn">
        Enter Chat Room
      </button>
    </div>
  );
};

export default Chat;
