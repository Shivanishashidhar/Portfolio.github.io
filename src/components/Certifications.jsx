import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import { SectionHeader } from "./About";

const certifications = [
  {
    title: "Full Stack Development Using Java & Python Powered by AI",
    issuer: "VStand4U Technologies",
    year: "2026",
    category: "Internship",
    link: "/internship_certificate.pdf",
  },
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL – IIT Certified",
    year: "2025",
    category: "NPTEL",
    link: "/privacy_security_social_media.pdf",
  },
  {
    title: "Interactive Course on Python and C++",
    issuer: "Online Platform",
    year: "2024",
    category: "Programming",
    link: "/cpp_python_certificate.pdf",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        backgroundColor: "#0f172a",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          label="Certifications"
          title="Credentials & Learning"
          description="Verified achievements that demonstrate my commitment to continuous learning."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "24px",
                backgroundColor: "#1e293b",
                borderRadius: "12px",
                border: "1px solid #334155",
                transition: "border-color 0.2s",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#475569")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#334155")}
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FaCertificate size={16} style={{ color: "#a78bfa" }} />
              </div>

              {/* Details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", lineHeight: 1.4 }}>
                    {cert.title}
                  </h3>
                  <span
                    style={{
                      padding: "2px 10px",
                      fontSize: "11px",
                      color: "#c4b5fd",
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      border: "1px solid rgba(124, 58, 237, 0.15)",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cert.category}
                  </span>
                </div>
                <p style={{ color: "#64748b", fontSize: "13px" }}>
                  {cert.issuer} · {cert.year}
                </p>
              </div>

              {/* External Link Icon */}
              <FaExternalLinkAlt size={13} style={{ color: "#475569", flexShrink: 0, transition: "color 0.2s" }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;