import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SectionHeader } from "./About";

function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: "#0b1120",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="section-inner" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          description="I'm actively looking for my first full-time role. Feel free to reach out!"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

          {/* Direct Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: FaEnvelope, label: "Email", value: "sshivanishashidhar@gmail.com", href: "mailto:sshivanishashidhar@gmail.com" },
              { icon: FaPhone, label: "Phone", value: "+91 7760962013", href: "tel:+917760962013" },
              { icon: FaMapMarkerAlt, label: "Location", value: "Bengaluru, Karnataka, India", href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#94a3b8",
                  }}
                >
                  <Icon size={15} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: "#64748b", fontSize: "12px", marginBottom: "2px" }}>{label}</p>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        color: "#e2e8f0",
                        fontSize: "14px",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "color 0.2s",
                        wordBreak: "break-all",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 500 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p style={{ color: "#64748b", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              Find me on
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href="https://github.com/Shivanishashidhar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#cbd5e1",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#475569"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.color = "#cbd5e1"; }}
              >
                <FaGithub size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shivani-shashidhar-murshilli-7a8324354"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#cbd5e1",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#60a5fa"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.color = "#cbd5e1"; }}
              >
                <FaLinkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;