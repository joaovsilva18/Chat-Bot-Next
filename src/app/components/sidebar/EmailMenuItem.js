// EmailMenuItem.js
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const EmailMenuItem = ({ emailId, emailTitle, newMessages, threads }) => {
  return (
    <li>
      <a href={`/email/${emailId}`} className="menu-item">
        <HiOutlineMail className="menu-icon" /> {emailTitle}
      </a>
      <div className="drawer-side-end">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Exibir Threads no lugar dos itens de barra lateral */}
          {threads &&
            threads.map((thread, index) => (
              <li key={index}>
                <a>{thread}</a>
              </li>
            ))}
        </ul>
      </div>
      {threads && <div>Threads: {threads.length}</div>}
    </li>
  );
};

export default EmailMenuItem;
