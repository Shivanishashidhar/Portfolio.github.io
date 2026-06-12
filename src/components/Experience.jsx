import { FaCheckCircle, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { SectionHeader } from "./About";

function Experience() {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: "#0f172a",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          label="Experience"
          title="Work Experience"
          description="Real-world exposure through internship and hands-on project work."
        />

        {/* Experience Card */}
        <div
          style={{
            padding: "32px",
            backgroundColor: "#1e293b",
            borderRadius: "16px",
            border: "1px solid #334155",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8">

            {/* Left — Meta */}
            <div style={{ flexShrink: 0 }} className="md:w-52">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b", fontSize: "13px", marginBottom: "8px" }}>
                <FaCalendarAlt size={12} />
                Feb 2026 – May 2026
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94a3b8", fontSize: "13px" }}>
                <FaBuilding size={12} />
                VStand4U Technologies
              </div>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#c4b5fd",
                  backgroundColor: "rgba(124, 58, 237, 0.12)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  borderRadius: "999px",
                }}
              >
                Internship
              </span>
            </div>

            {/* Right — Details */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                Full Stack Development Intern
              </h3>
              <p style={{ color: "#a78bfa", fontWeight: 500, fontSize: "13px", marginBottom: "24px" }}>
                15-week program · Java & Python · AI-powered solutions
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Completed a 15-week intensive Full Stack Development internship using Java and Python.",
                  "Built web applications integrating frontend UI with backend APIs and databases.",
                  "Worked on AI-powered solutions and automation-driven workflows.",
                  "Gained hands-on experience with API integration, software architecture, and database operations.",
                ].map((point, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#94a3b8", fontSize: "14px", lineHeight: 1.7 }}>
                    <FaCheckCircle size={14} style={{ color: "#7c3aed", flexShrink: 0, marginTop: "4px" }} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Skills tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
                {["Java", "Python", "Full Stack", "REST APIs", "Databases", "AI/ML"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 12px",
                      fontSize: "12px",
                      color: "#94a3b8",
                      backgroundColor: "#0f172a",
                      borderRadius: "6px",
                      border: "1px solid #334155",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fresher note */}
        <p style={{ marginTop: "24px", color: "#64748b", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>🌱</span>
          As a fresher, I compensate with strong project work, certifications, and a passion for continuous learning.
        </p>
      </div>
    </section>
  );
}

export default Experience;