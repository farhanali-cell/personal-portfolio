import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderKanban, Code2, Mail, Menu, X } from "lucide-react";
import profilePic from "../../assets/profile.jpg";

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={17}
      height={17}
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={17}
      height={17}
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width={17}
      height={17}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navItems = [
  { label: "Home", icon: Home },
  { label: "About", icon: User },
  { label: "Projects", icon: FolderKanban },
  { label: "Skills", icon: Code2 },
  { label: "Contact", icon: Mail },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/farhanali-cell?tab=repositories",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/farhan-ali-59a863373",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/farhan_ali_062",
  },
];

function NavList({ activeSection, onSelect }) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.label.toLowerCase();
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.label.toLowerCase())}
            className={`group flex items-center justify-between px-3 py-2.5 rounded-xl
                        text-sm transition-all duration-300
                        ${isActive ? "bg-white text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
          >
            <span className="flex items-center gap-3">
              <Icon size={17} />
              {item.label}
            </span>
            <span
              className={`text-xs ${isActive ? "text-black/50" : "text-gray-600 group-hover:text-gray-400"}`}
            >
              {item.id}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

function ConnectList() {
  return (
    <div className="mt-auto pt-6 border-t border-white/10">
      <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-3 px-3">
        Connect
      </p>
      <div className="flex flex-col gap-1">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm
              text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              <Icon />
              {social.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Sidebar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar — lg aur usse bara screen pe */}
      <motion.aside
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col
                   bg-black border-r border-white/10 px-4 py-6 z-50"
      >
        <div className="flex items-center gap-3 mb-8">
          <img
            src={profilePic}
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover border border-white/20"
          />
          <div>
            <p className="text-white text-sm font-semibold">Farhan Ali</p>
            <p className="text-gray-400 text-xs">Full Stack Developer</p>
          </div>
        </div>
        <NavList activeSection={activeSection} onSelect={handleSelect} />
        <ConnectList />
      </motion.aside>

      {/* Mobile/tablet top bar */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                       bg-black/90 backdrop-blur-md border-b border-white/10 px-4 py-3"
      >
        <div className="flex items-center gap-2.5">
          <img
            src={profilePic}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-white/20"
          />
          <p className="text-white text-sm font-semibold">Farhan Ali</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg text-gray-300 hover:bg-white/5"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/70 z-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="lg:hidden fixed top-0 right-0 h-screen w-64 bg-black border-l
                         border-white/10 px-4 py-6 z-70 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Farhan Ali
                    </p>
                    <p className="text-gray-400 text-xs">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <NavList activeSection={activeSection} onSelect={handleSelect} />
              <ConnectList />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
