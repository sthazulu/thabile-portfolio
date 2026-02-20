import { FaGithub, FaLinkedin, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const seekingRoles = ["Data Analyst", "Data Engineer", "Data Scientist"];

const qualifications = [
  "Diploma in Informatics (Cum Laude) — TUT",
  "Advanced Diploma in Informatics (In Progress) — TUT",
  "Microsoft Azure Data Fundamentals (DP-900)",
  "AWS Re/Start Graduate Programme",
  "Cisco Data Analytics Essentials",
];

const ProfileSidebar = () => {
  return (
    <div
      className="w-full rounded-2xl border border-white/[0.1] p-6 flex flex-col gap-5"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Profile photo */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/thabile.jpg"
          alt="Thabile Zulu"
          className="w-36 h-36 lg:w-full lg:aspect-square lg:max-w-[240px] rounded-full lg:rounded-2xl object-cover object-top shadow-md"
        />
      </div>

      {/* Name & tagline */}
      <div>
        <h1 className="text-2xl font-bold text-white leading-tight">
          Thabile Zulu
        </h1>
        <p className="text-purple text-sm mt-1 font-medium">
          Informatics Graduate (Cum Laude) | Aspiring Data &amp; Cloud Professional
        </p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-white-200 text-sm">
        <FaLocationDot size={13} className="shrink-0 text-purple" />
        <span>Johannesburg, Gauteng</span>
      </div>

      {/* Email */}
      <a
        href="mailto:sthazulu002@gmail.com"
        className="flex items-center gap-2 text-white-200 text-sm hover:text-purple transition-colors duration-200"
      >
        <FaEnvelope size={13} className="shrink-0 text-purple" />
        <span>sthazulu002@gmail.com</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/sthazulu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white-200 text-sm hover:text-purple transition-colors duration-200"
      >
        <FaGithub size={13} className="shrink-0 text-purple" />
        <span>github.com/sthazulu</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/thabile-zulu-507976201/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white-200 text-sm hover:text-purple transition-colors duration-200"
      >
        <FaLinkedin size={13} className="shrink-0 text-purple" />
        <span>Thabile Zulu on LinkedIn</span>
      </a>

      <div className="border-t border-white/[0.1]" />

      {/* Open to */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-white-200 uppercase tracking-wider font-semibold">
          Open to
        </p>
        <div className="flex flex-wrap gap-2">
          {seekingRoles.map((role, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full border border-purple/30 text-purple bg-purple/10 font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.1]" />

      {/* Qualifications */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-white-200 uppercase tracking-wider font-semibold">
          Qualifications
        </p>
        <div className="flex flex-col gap-2">
          {qualifications.map((q, i) => (
            <span
              key={i}
              className="text-xs px-3 py-2 rounded-lg border border-white/[0.1] text-white-200 bg-black-200"
            >
              {q}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
