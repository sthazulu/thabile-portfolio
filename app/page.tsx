"use client";

import { useState } from "react";

import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import AboutSection from "@/components/AboutSection";

const tabs = ["About", "Projects", "Skills", "Certifications", "Contact"];

const Home = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-4xl w-full">
        <div className="pt-10 pb-10">

          {/* Tab bar */}
          <div className="flex gap-1 border-b border-white/[0.1] mb-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
                  activeTab === tab
                    ? "border-purple text-purple"
                    : "border-transparent text-white-200 hover:text-white hover:border-white/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "About" && <AboutSection />}
          {activeTab === "Projects" && <RecentProjects />}
          {activeTab === "Skills" && <Clients />}
          {activeTab === "Certifications" && <Experience />}
          {activeTab === "Contact" && <Footer />}
        </div>
      </div>
    </main>
  );
};

export default Home;
