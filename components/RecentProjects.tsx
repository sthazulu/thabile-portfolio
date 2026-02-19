"use client";

import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Featured <span className="text-purple">projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-white/[0.1] flex flex-col overflow-hidden hover:shadow-xl transition duration-200"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            {/* Image banner */}
            <div
              className="relative h-40 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: "#13162D" }}
            >
              <img
                src="/bg.png"
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <img
                src={item.img}
                alt={item.title}
                className="relative z-10 h-20 w-20 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 gap-3">
              <h2 className="font-bold text-white text-base leading-snug">
                {item.title}
              </h2>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>

              {/* Tech icons */}
              <div className="flex items-center gap-1 mt-1">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                    style={{ transform: `translateX(-${5 * index + 2}px)` }}
                  >
                    <img src={icon} alt="tech" className="p-2" />
                  </div>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-sm text-purple font-medium hover:underline"
              >
                <FaGithub size={14} />
                View on GitHub
                <FaLocationArrow size={11} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/sthazulu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple/30 text-purple bg-purple/10 text-sm font-semibold hover:bg-purple/20 transition duration-200"
        >
          <FaGithub size={16} />
          View all projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
