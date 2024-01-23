// SidebarMenu.js
import React from "react";
import Link from "next/link";

const SidebarMenu = () => {
  return (
    <ul className="menu bg-gray-800 w-56 rounded-box">
      <li className="menu-title">Sessions</li>
      {/* <li>
        <Link href="/email-do-forattini">
          <a>E-mail do Forattini</a>
        </Link>
      </li>
      <li>
        <Link href="/ajuda-plano-de-saude">
          <a>Ajuda com o Plano de Saúde</a>
        </Link>
      </li> */}
    </ul>
  );
};

export default SidebarMenu;
