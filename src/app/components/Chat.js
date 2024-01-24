// components/Chat.js

import React from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

const Chat = () => {
  // Exemplo de mensagens (será dinâmico quando conectado ao Slack)
  const messages = [
    {
      type: "user",
      userName: "Usuário",
      text: "Olá, como posso ajudar?",
      time: "10:00 AM",
    },
    {
      type: "bot",
      botName: "Bot",
      text: "Olá! Estou aqui para ajudar.",
      time: "10:05 AM",
    },
    // Adicione mais mensagens conforme necessário
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {messages.map((message, index) =>
        // Renderiza mensagens do usuário ou do bot com base no tipo
        message.type === "user" ? (
          <UserMessage
            key={index}
            userName={message.userName}
            text={message.text}
            time={message.time}
          />
        ) : (
          <BotMessage
            key={index}
            botName={message.botName}
            text={message.text}
            time={message.time}
          />
        )
      )}
    </div>
  );
};

export default Chat;
