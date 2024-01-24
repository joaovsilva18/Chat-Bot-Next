// Chat.js
import React from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

const Chat = () => {
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
    {
      type: "user",
      userName: "Usuário",
      text: "Tenho uma dúvida sobre como realizar um pagamento. Pode me orientar?",
      time: "10:10 AM",
    },
    {
      type: "bot",
      botName: "Bot",
      text: "Certamente! Fique à vontade para fazer sua pergunta sobre pagamentos.",
      time: "10:15 AM",
    },
    {
      type: "user",
      userName: "Usuário",
      text: "Gostaria de saber quais são as opções de pagamento disponíveis.",
      time: "10:20 AM",
    },
    {
      type: "bot",
      botName: "Bot",
      text: "Atualmente, oferecemos diversas opções de pagamento, incluindo cartão de crédito, boleto bancário e transferência bancária. Você pode escolher a opção que melhor atenda às suas necessidades.",
      time: "10:25 AM",
    },
    
    // Adicione mais mensagens conforme necessário
  ];

  const chatStyle = {
    backgroundImage: 'url("https://www.idinheiro.com.br/wp-content/uploads/2022/08/stone-2048.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={chatStyle}>
      {messages.map((message, index) =>
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
