// page.js
import React from "react";
import Navbar from "./components/navbar/Navbar";
import SidebarMenu from "./components/sidebar/SidebarMenu";
import Chat from "../app/components/chat/Chat";
import Footer from "./components/footer/Footer";
import Home from "../app/pages/Home.js";  // Alteração aqui

export default function HomePage() {
  return (
    <div className="flex h-screen">
      {/* SidebarMenu */}
      <SidebarMenu />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-1 flex flex-col overflow-y-auto p-4">
          {/* Chat */}
          <Chat />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
