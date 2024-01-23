// components/Chat.js

import React from 'react';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

const Chat = () => {
  // Exemplo de mensagens (isso será dinâmico quando conectado ao Slack)
  const messages = [
    { type: 'user', userName: 'Usuário', text: 'Olá, como posso ajudar?' },
    { type: 'bot', botName: 'Bot', text: 'Olá! Estou aqui para ajudar.' },
    // Adicione mais mensagens conforme necessário
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {messages.map((message, index) => (
        // Renderiza mensagens do usuário ou do bot com base no tipo
        message.type === 'user' ? (
          <UserMessage key={index} userName={message.userName} text={message.text} />
        ) : (
          <BotMessage key={index} botName={message.botName} text={message.text} />
        )
      ))}
    </div>
  );
};

export default Chat;
