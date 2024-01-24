// SidebarMenu.js
import React from "react";
import EmailMenuItem from "./EmailMenuItem";

const SidebarMenu = () => {
  const emailItems = [
    { id: "forattini@gmail.com", title: "forattini@gmail.com", newMessages: 99 },
    { id: "john.doe@example.com", title: "john.doe@example.com" , newMessages: 7},
    { id: "jane.smith@gmail.com", title: "jane.smith@gmail.com"},
    { id: "user123@hotmail.com", title: "user123@hotmail.com" , newMessages: 5},
    { id: "support@company.com", title: "support@company.com"},
    { id: "sales@company.com", title: "sales@company.com" , newMessages: 2},
    { id: "contact@website.com", title: "contact@website.com" },
    { id: "info@business.com", title: "info@business.com" , newMessages: 1},
    { id: "customer.service@gmail.com", title: "customer.service@gmail.com" },
    { id: "webmaster@example.org", title: "webmaster@example.org" },
  ];

  return (
    <div className="bg-gray-800 w-70 h-screen overflow-y-auto">
      <ul className="menu">
      <li className="menu-title text-center text-green-500 font-bold py-4 border-b-2 border-green-500 text-xl mb-4">
          SESSIONS
        </li>
        {emailItems.map((item) => (
          <EmailMenuItem
            key={item.id}
            emailId={item.id}
            emailTitle={item.title}
            newMessages={item.newMessages}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
