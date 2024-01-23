// Thread.js
import React from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

const Thread = ({ person, messages }) => {
  return (
    <div className="thread-container">
      {/* Renderize as mensagens da thread do Slack aqui */}
      {messages.map((message) => (
        // Use os componentes UserMessage e BotMessage conforme necessário
        // Exemplo:
        <UserMessage key={message.id} userName={message.userName} text={message.text} />
      ))}
    </div>
  );
};

export default Thread;
