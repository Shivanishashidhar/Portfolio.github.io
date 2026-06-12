import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#080d1a] border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div>
          <p className="text-white font-bold text-base">
            Shivani<span className="text-violet-400">.</span>
          </p>
          <p className="text-slate-500 text-xs mt-1">AI & Full Stack Developer · Bengaluru, India</p>
        </div>

        {/* Center — copyright */}
        <p className="text-slate-600 text-xs text-center">
          © 2026 Shivani Murshilli. All rights reserved.
        </p>

        {/* Right — socials */}
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/Shivanishashidhar", icon: <FaGithub className="w-4 h-4" />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/shivani-shashidhar-murshilli-7a8324354", icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn" },
            { href: "mailto:sshivanishashidhar@gmail.com", icon: <FaEnvelope className="w-4 h-4" />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-slate-300 transition-colors"
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