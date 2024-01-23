// components/UserMessage.js

import React from 'react';


const UserMessage = ({ userName, text }) => {
  return (
    <div className="flex items-start justify-start mb-2">
      <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
        <div className="text-xs text-gray-400">{userName}</div>
        {text}
      </div>
    </div>
  );
};

export default UserMessage;


