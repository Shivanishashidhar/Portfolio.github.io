import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(51, 65, 85, 0.5)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: 700, fontSize: "20px" }}>
          Shivani<span style={{ color: "#8b5cf6" }}>.</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                textDecoration: "none",
                color: "#94a3b8",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              padding: "8px 20px",
              backgroundColor: "#7c3aed",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "8px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#6d28d9")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#7c3aed")}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="navbar-hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            color: "#94a3b8",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "#0f172a",
            borderTop: "1px solid #1e293b",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#cbd5e1",
                fontSize: "15px",
                fontWeight: 500,
                padding: "4px 0",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none",
              display: "inline-block",
              width: "fit-content",
              marginTop: "4px",
              padding: "10px 24px",
              backgroundColor: "#7c3aed",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "8px",
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;