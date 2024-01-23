// page.js
import React from "react";
import Navbar from "../app/components/Navbar";
import SidebarMenu from "../app/components/SidebarMenu";
import Chat from "../app/components/Chat";
import Footer from "../app/components/Footer";
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
