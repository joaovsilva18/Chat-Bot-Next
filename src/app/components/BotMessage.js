// components/BotMessage.js

import React from "react";

const BotMessage = ({ botName, text, time }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-header">
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble chat-bubble-success">
        <div className="text-xs text-gray-400">{botName}</div>
        {text}
      </div>
    </div>
  );
};

export default BotMessage;
