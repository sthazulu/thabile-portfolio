import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { certifications } from "@/data";

const Experience = () => {
  return (
    <section id="certifications" className="py-20 w-full">
      <h1 className="heading">
        Certifications &amp; <span className="text-purple">learning</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-6">
        {certifications.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl border border-white/[0.1] p-6 flex gap-4"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center">
              <Image src={card.thumbnail} alt={card.title} width={28} height={28} className="object-contain" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h2 className="font-bold text-white text-base leading-snug">{card.title}</h2>
              <p className="text-xs text-purple font-semibold">{card.issuer}</p>
              <p className="text-sm text-white-200 mt-1 leading-relaxed">{card.desc}</p>
              {card.link !== "#" && (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-1 text-xs text-purple font-medium hover:underline"
                >
                  View Certificate <FaArrowRight size={10} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
