import React, { useState } from "react";
import HomeCards from "./HomeCards";
import Head from "./Head";
import Sidebar from "./Sidebar";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header (fixed at top) */}
      <Head onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar under header */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main content shifted if sidebar is open */}
      <div className={`transition-all duration-300 pt-4 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
        <h1 className="text-center text-5xl mt-11 font-semibold mb-12">
          Welcome to SentineAI
        </h1>
        <div className="flex justify-center">
          <HomeCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
