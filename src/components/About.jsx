import { FaBrain, FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";

/* ─── Reusable Section Header ────────────────────────────────────── */
export function SectionHeader({ label, title, description, center }) {
  return (
    <div
      style={{
        marginBottom: "48px",
        maxWidth: center ? "600px" : "560px",
        textAlign: center ? "center" : "left",
        marginLeft: center ? "auto" : undefined,
        marginRight: center ? "auto" : undefined,
      }}
    >
      <p style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
        {label}
      </p>
      <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px", lineHeight: 1.2 }}>
        {title}
      </h2>
      {description && (
        <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7 }}>{description}</p>
      )}
    </div>
  );
}

/* backward compat */
export function SectionTitle({ title, subtitle }) {
  return <SectionHeader label={subtitle} title={title} />;
}

const highlights = [
  { icon: "brain", label: "AI & Machine Learning", desc: "PyTorch, LLMs, OpenCV, ML algorithms" },
  { icon: "code", label: "Full Stack Dev", desc: "React, Node.js, Flask, Django, REST APIs" },
  { icon: "rocket", label: "Automation", desc: "n8n workflows, Selenium, scripting" },
  { icon: "grad", label: "Fresher", desc: "Eager to learn, grow, and contribute" },
];

function HighlightIcon({ name }) {
  const style = { width: "20px", height: "20px", color: "#a78bfa" };
  if (name === "brain") return <FaBrain style={style} />;
  if (name === "code") return <FaCode style={style} />;
  if (name === "rocket") return <FaRocket style={style} />;
  if (name === "grad") return <FaGraduationCap style={style} />;
  return null;
}

function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: "#0f172a",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="section-inner" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          label="About Me"
          title="Who I Am"
        />

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >

          {/* ── Left: Bio ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8 }}>
              I am Shivani Murshilli, a graduate in Artificial Intelligence and Machine Learning (AIML) with a strong passion for building intelligent and impactful technology solutions.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8 }}>
              Currently based in Bengaluru, India, I specialize in{" "}
              <span style={{ color: "#fff", fontWeight: 500 }}>AI, Machine Learning, Full Stack Development, and Automation</span>.
              I enjoy combining my technical knowledge with problem-solving skills to create applications that address real-world challenges and improve user experiences.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8 }}>
              My expertise includes{" "}
              <span style={{ color: "#fff", fontWeight: 500 }}>Python, JavaScript, Node.js, MongoDB, Flask, Django, PyTorch, OpenCV, and automation tools such as n8n</span>.
              I am continuously learning and exploring emerging technologies, particularly in AI and software engineering, to stay at the forefront of innovation.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8 }}>
              I am driven by curiosity, continuous growth, and the desire to develop technology that makes a meaningful difference.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              {["📍 Bengaluru, India", "🎓 AIML Graduate", "💼 Intern at VStand4U", "🚀 Open to Work"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    fontSize: "13px",
                    color: "#cbd5e1",
                    backgroundColor: "#1e293b",
                    borderRadius: "6px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/Shivani_Resume_.pdf"
              download
              id="about-download-resume-btn"
              style={{
                display: "inline-block",
                width: "fit-content",
                marginTop: "8px",
                padding: "10px 24px",
                backgroundColor: "#7c3aed",
                color: "white",
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6d28d9")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
            >
              Download Resume →
            </a>
          </div>

          {/* ── Right: Highlight Cards ── */}
          <div
            className="highlights-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {highlights.map(({ icon, label, desc }) => (
              <div
                key={label}
                style={{
                  padding: "24px",
                  backgroundColor: "#1e293b",
                  borderRadius: "12px",
                  border: "1px solid #334155",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7c3aed")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#334155")}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <HighlightIcon name={icon} />
                </div>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "15px", marginBottom: "6px" }}>{label}</p>
                <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;