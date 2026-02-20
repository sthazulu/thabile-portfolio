import Image from "next/image";

const seekingRoles = ["Data Analyst", "Data Engineer", "Data Scientist", "Other Data Related Fields"];

const qualifications = [
  "National Senior Certificate — Khula High (2018)",
  "Diploma in Informatics (Cum Laude) — Tshwane University of Technology (2025)",
  "Advanced Diploma in Informatics — Tshwane University of Technology (In Progress)",
];

const AboutSection = () => {
  return (
    <div className="py-10 flex flex-col gap-6">

      {/* Photo + name + summary card */}
      <div
        className="rounded-2xl border border-white/[0.1] overflow-hidden"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className="flex flex-col sm:flex-row gap-0">
          {/* Photo */}
          <div className="sm:w-52 shrink-0 relative h-56">
            <Image
              src="/thabile.jpg"
              alt="Thabile Zulu"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 208px"
              priority
            />
          </div>

          {/* Name, tagline, summary */}
          <div className="p-8 flex flex-col justify-center gap-3">
            <div>
              <p className="text-purple text-base mt-1 font-medium">
                Informatics Graduate (Cum Laude) | Aspiring Data &amp; Cloud Professional
              </p>
            </div>
            <p className="text-white-200 text-sm leading-relaxed">
              Motivated Informatics graduate (Cum Laude) enthusiastic about data analytics
              and cloud technologies. Seeking entry-level opportunities in data analytics,
              data engineering, data sciences and related fields.
            </p>
          </div>
        </div>
      </div>

      {/* Open to */}
      <div
        className="rounded-2xl border border-white/[0.1] p-6"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <p className="text-xs text-white-200 uppercase tracking-wider font-semibold mb-3">
          Open to
        </p>
        <div className="flex flex-wrap gap-2">
          {seekingRoles.map((role, i) => (
            <span
              key={i}
              className="text-sm px-4 py-1.5 rounded-full border border-purple/30 text-purple bg-purple/10 font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Qualifications */}
      <div
        className="rounded-2xl border border-white/[0.1] p-6"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <p className="text-xs text-white-200 uppercase tracking-wider font-semibold mb-3">
          Qualifications
        </p>
        <div className="flex flex-col gap-2">
          {qualifications.map((q, i) => (
            <span
              key={i}
              className="text-sm px-4 py-2.5 rounded-lg border border-white/[0.1] text-white-200 bg-black-200"
            >
              {q}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutSection;
