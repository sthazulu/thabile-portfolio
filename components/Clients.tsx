"use client";

import React from "react";
import { skills, skillCategories } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        Technical <span className="text-purple">skills &amp; tools</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[24rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-lg:mt-6">
          {skillCategories.map((cat, i) => (
            <span
              key={i}
              className="text-sm px-4 py-2 rounded-full border border-purple/30 text-purple bg-purple/10 font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
