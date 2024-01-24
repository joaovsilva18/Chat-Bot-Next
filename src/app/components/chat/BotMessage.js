// components/BotMessage.js

import React from "react";

const BotMessage = ({ botName, text, time }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-header">
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble chat-bubble-success border-2 border-black">

        <div className="text-xs text-black-100">{botName}</div>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default BotMessage;
