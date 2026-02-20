import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="flex flex-col gap-6 items-center">

        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-purple">connect</span> and collaborate?
        </h1>
        <p className="text-white-200 max-w-xl text-sm leading-relaxed">
          I am seeking entry-level positions across data analytics, data engineering, data science,
          and related data fields. I welcome connections and opportunities to collaborate.
        </p>

        {/* Contact details */}
        <div
          className="rounded-2xl border border-white/[0.1] p-6 flex flex-col gap-4 max-w-sm"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <a
            href="mailto:sthazulu002@gmail.com"
            className="flex items-center gap-3 text-white-200 text-sm hover:text-purple transition-colors duration-200"
          >
            <FaEnvelope size={15} className="text-purple shrink-0" />
            sthazulu002@gmail.com
          </a>
          <a
            href="tel:+27611579439"
            className="flex items-center gap-3 text-white-200 text-sm hover:text-purple transition-colors duration-200"
          >
            <FaPhone size={15} className="text-purple shrink-0" />
            +27 611 579 439
          </a>
          <div className="flex items-center gap-3 text-white-200 text-sm">
            <FaLocationDot size={15} className="text-purple shrink-0" />
            Johannesburg, Gauteng
          </div>
          <a
            href="https://www.linkedin.com/in/thabile-zulu-507976201/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white-200 text-sm hover:text-purple transition-colors duration-200"
          >
            <FaLinkedin size={15} className="text-purple shrink-0" />
            linkedin.com/in/thabile-zulu-507976201
          </a>
          <a
            href="https://github.com/sthazulu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white-200 text-sm hover:text-purple transition-colors duration-200"
          >
            <FaGithub size={15} className="text-purple shrink-0" />
            github.com/sthazulu
          </a>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="text-white-200 md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2025 Thabile Zulu
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <a
            href="https://github.com/sthazulu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/30 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={18} className="text-white-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/thabile-zulu-507976201/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/30 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} className="text-white-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
