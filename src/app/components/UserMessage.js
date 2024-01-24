// components/UserMessage.js

import React from "react";

const UserMessage = ({ userName, text, time }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-header">
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble chat-bubble">
        <div className="text-xs text-black-100">{userName}</div>
        {text}
      </div>
    </div>
  );
};

export default UserMessage;
