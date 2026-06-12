import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import heroImage from "../assets/hero.jpeg";

const roles = ["AI Developer", "Full Stack Developer", "ML Engineer", "Problem Solver"];

function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= role.length) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 90);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 50);
    } else if (!isDeleting && charIndex > role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="section-padding"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
        backgroundColor: "#0f172a",
        position: "relative",
      }}
    >
      <div
        className="section-inner"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >

          {/* ── Text Side ── */}
          <div
            className="hero-text"
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >

            {/* Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                color: "#34d399",
                fontSize: "13px",
                fontWeight: 500,
                marginBottom: "28px",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#34d399",
                }}
              />
              Open to Work
            </div>

            {/* Greeting */}
            <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "8px" }}>
              Hi, I&apos;m
            </p>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Shivani{" "}
              <span style={{ color: "#a78bfa" }}>Murshilli</span>
            </h1>

            {/* Typewriter Role */}
            <p
              style={{
                fontSize: "18px",
                color: "#94a3b8",
                fontWeight: 500,
                height: "28px",
                marginBottom: "20px",
              }}
            >
              {displayed}
              <span
                className="animate-blink"
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "20px",
                  backgroundColor: "#a78bfa",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                }}
              />
            </p>

            {/* Description */}
            <p
              className="hero-description"
              style={{
                color: "#94a3b8",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "32px",
              }}
            >
              A passionate fresher specializing in AI &amp; Full Stack Development.
              I build intelligent applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div
              className="hero-buttons"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <a
                href="#projects"
                id="hero-view-projects-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  backgroundColor: "#7c3aed",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "15px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "background-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#6d28d9";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#7c3aed";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View My Work
              </a>
              <a
                href="/Shivani__Resume.pdf"
                download
                id="hero-download-resume-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  border: "1px solid #334155",
                  color: "#cbd5e1",
                  fontWeight: 600,
                  fontSize: "15px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#64748b";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#334155";
                  e.currentTarget.style.color = "#cbd5e1";
                }}
              >
                <FaArrowDown size={14} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="hero-socials"
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <a
                href="https://github.com/Shivanishashidhar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <FaGithub size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shivani-shashidhar-murshilli-7a8324354?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* ── Photo Side ── */}
          <div style={{ flexShrink: 0 }}>
            <div
              className="hero-photo-wrapper"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                padding: "3px",
                background: "linear-gradient(135deg, #7c3aed, #a78bfa, #c084fc)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#0f172a",
                }}
              >
                <img
                  src={heroImage}
                  alt="Shivani Murshilli"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div
          className="hero-stats"
          style={{
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid #1e293b",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            maxWidth: "360px",
          }}
        >
          {[
            { value: "2+", label: "Projects Built" },
            { value: "2+", label: "Certifications" },
            { value: "1", label: "Internship" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p style={{ fontSize: "28px", fontWeight: 700, color: "#a78bfa" }}>{value}</p>
              <p style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;