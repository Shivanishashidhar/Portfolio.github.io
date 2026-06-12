import { FaGithub } from "react-icons/fa";
import { SectionHeader } from "./About";

const projects = [
  {
    number: "01",
    title: "Smart Vehicle Monitoring & Driver Drowsiness Detection",
    description:
      "An AI-based driver safety system that monitors eye movement using Eye Aspect Ratio (EAR) analysis and yawning detection, triggering real-time audio alerts to prevent drowsy driving accidents.",
    tags: ["Python", "OpenCV", "Dlib", "PyGame", "Computer Vision"],
    github: "#",
  },
  {
    number: "02",
    title: "AI-Powered Adaptive Learning Engine",
    description:
      "A personalized learning platform powered by LLMs and n8n automation. Delivers adaptive quizzes and media recommendations based on the learner's progress and performance.",
    tags: ["Python", "LLMs", "n8n", "Automation", "AI Agent"],
    github: "https://github.com/Shivanishashidhar/n8n",
  },
  {
    number: "03",
    title: "Classroom Attendance via Face Recognition",
    description:
      "A real-time attendance system using face recognition to automate classroom roll calls. Captures and matches faces via webcam, maintaining digital attendance records automatically.",
    tags: ["Python", "OpenCV", "Face Recognition", "Automation"],
    github: "https://github.com/sahanassankanurmath/-Classroom-Attendance-with-Face-Recognition-System.",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        backgroundColor: "#0b1120",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="section-inner" style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          label="Projects"
          title="What I've Built"
          description="A selection of projects from my AI & Full Stack journey."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((project) => (
            <div
              key={project.number}
              style={{
                padding: "32px",
                backgroundColor: "#1e293b",
                borderRadius: "16px",
                border: "1px solid #334155",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#475569")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#334155")}
            >
              <div
                className="project-layout"
                style={{ display: "flex", gap: "24px" }}
              >
                {/* Number */}
                <div style={{ flexShrink: 0, width: "48px" }}>
                  <span style={{ fontSize: "28px", fontWeight: 700, color: "#334155" }}>
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "12px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      style={{ color: "#64748b", transition: "color 0.2s", flexShrink: 0, marginTop: "2px" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.tags.map((tag) => (
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
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ marginTop: "32px" }}>
          <a
            href="https://github.com/Shivanishashidhar"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-link"
            style={{
              display: "inline-flex",
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
            <FaGithub size={16} />
            See more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;