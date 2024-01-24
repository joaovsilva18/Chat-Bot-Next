// EmailMenuItem.js
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const EmailMenuItem = ({ emailId, emailTitle, newMessages }) => {
  return (
    <li className="relative">
      <a href={`/email/${emailId}`} className="menu-item flex items-center">
        <HiOutlineMail className="menu-icon" /> 
        <span className="ml-2">{emailTitle}</span>
        {newMessages > 0 && (
          <span className="indicator-item badge text-green-500">{newMessages}</span>
          )}
      </a>
    </li>
  );
};

export default EmailMenuItem;
