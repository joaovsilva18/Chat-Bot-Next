// SidebarPerson.js
import React from "react";

const SidebarPerson = ({ person, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>{person.email}</button>
      {/* Pode adicionar mais informações sobre a pessoa aqui */}
    </li>
  );
};

export default SidebarPerson;
