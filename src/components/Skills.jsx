import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiFlask,
  SiDjango, SiMongodb, SiMysql, SiGit, SiGithub,
  SiSelenium, SiPytorch, SiOpencv, SiHtml5, SiCss,
} from "react-icons/si";
import { FaBrain, FaRobot, FaTools, FaDatabase, FaCode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SectionHeader } from "./About";

/* ─── Icon mapping ───────────────────────────────────────────────── */
const skillIcons = {
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  "Machine Learning": { Icon: FaBrain, color: "#a78bfa" },
  LLMs: { Icon: FaRobot, color: "#f472b6" },
  OpenCV: { Icon: SiOpencv, color: "#5C3EE8" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Flask: { Icon: SiFlask, color: "#cbd5e1" },
  Django: { Icon: SiDjango, color: "#44b78b" },
  "REST APIs": { Icon: TbApi, color: "#fbbf24" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#cbd5e1" },
  Selenium: { Icon: SiSelenium, color: "#43B02A" },
};

const catIcons = {
  ai: FaBrain,
  web: FaCode,
  db: FaDatabase,
  tools: FaTools,
};

const categories = [
  { id: "ai", label: "AI & Machine Learning", skills: ["PyTorch", "Machine Learning", "LLMs", "OpenCV"] },
  { id: "web", label: "Full Stack Development", skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Flask", "Django", "REST APIs"] },
  { id: "db", label: "Databases", skills: ["MongoDB", "MySQL"] },
  { id: "tools", label: "Languages & Tools", skills: ["Python", "Git", "GitHub", "Selenium", "n8n", "DSA"] },
];

function Skills() {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#0b1120",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          label="Skills"
          title="What I Work With"
          description="Technologies I've used in projects, courses, and my internship."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {categories.map((cat) => {
            const CatIconComp = catIcons[cat.id];
            return (
              <div key={cat.id}>
                {/* Category Label */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a78bfa",
                    }}
                  >
                    {CatIconComp && <CatIconComp size={14} />}
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px" }}>{cat.label}</h3>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "#1e293b", marginLeft: "8px" }} />
                </div>

                {/* Skill Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {cat.skills.map((name) => {
                    const skill = skillIcons[name];
                    return (
                      <div
                        key={name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "10px 16px",
                          backgroundColor: "#1e293b",
                          borderRadius: "8px",
                          border: "1px solid #334155",
                          cursor: "default",
                          transition: "border-color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#475569")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#334155")}
                      >
                        <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {skill ? (
                            <skill.Icon size={20} style={{ color: skill.color }} />
                          ) : (
                            <span style={{ color: "#a78bfa", fontWeight: 700, fontSize: "11px" }}>{name}</span>
                          )}
                        </div>
                        <span style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: 500 }}>{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;