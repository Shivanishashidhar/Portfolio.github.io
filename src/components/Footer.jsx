import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#080d1a",
        borderTop: "1px solid #1e293b",
        padding: "40px 0",
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >

        {/* Left */}
        <div>
          <p style={{ color: "white", fontWeight: 700, fontSize: "16px" }}>
            Shivani<span style={{ color: "#a78bfa" }}>.</span>
          </p>
          <p style={{ color: "#64748b", fontSize: "12px", marginTop: "4px" }}>
            AI & Full Stack Developer · Bengaluru, India
          </p>
        </div>

        {/* Center — copyright */}
        <p style={{ color: "#475569", fontSize: "12px", textAlign: "center" }}>
          © 2026 Shivani Murshilli. All rights reserved.
        </p>

        {/* Right — socials */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {[
            { href: "https://github.com/Shivanishashidhar", icon: <FaGithub size={16} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/shivani-shashidhar-murshilli-7a8324354", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
            { href: "mailto:sshivanishashidhar@gmail.com", icon: <FaEnvelope size={16} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: "#64748b",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;