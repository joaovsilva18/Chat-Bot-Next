// components/BotMessage.js

import React from "react";

const BotMessage = ({ botName, text }) => {
  return (
    <div className="flex items-end justify-end mb-2">
      <div className="bg-green-700 text-white py-2 px-4 rounded-lg">
        <div className="text-xs text-gray-400">{botName}</div>
        {text}
      </div>
    </div>
  );
};

export default BotMessage;
