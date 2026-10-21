import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import Loader from "./components/layout/Loader";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Services from "./components/sections/Services";

const sections = {
  home: Home,
  about: About,
  projects: Projects,
  skills: Skills,
  services: Services,
  contact: Contact,
};

const THEMES = {
  home: { wire: 0x00d9df, ridge: 0x39f5ff, particle: 0x53faff, glow: 0x008f9d },
  about: {
    wire: 0x0ea5e9,
    ridge: 0x38bdf8,
    particle: 0x7dd3fc,
    glow: 0x0369a1,
  },
  projects: {
    wire: 0x8b5cf6,
    ridge: 0xa78bfa,
    particle: 0xc4b5fd,
    glow: 0x5b21b6,
  },
  skills: {
    wire: 0xec4899,
    ridge: 0xf472b6,
    particle: 0xf9a8d4,
    glow: 0x9d174d,
  },
  services: {
    wire: 0x22c55e,
    ridge: 0x4ade80,
    particle: 0x86efac,
    glow: 0x15803d,
  },
  contact: {
    wire: 0xeab308,
    ridge: 0xfacc15,
    particle: 0xfde047,
    glow: 0x854d0e,
  },
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const ActiveComponent = sections[activeSection];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <AnimatedBackground theme={THEMES[activeSection]} />

      <main
        className="relative h-screen overflow-y-auto text-white
                   px-5 py-6 pt-20
                   lg:ml-56 lg:px-10 lg:py-8 lg:pt-8"
      >
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ActiveComponent setActiveSection={setActiveSection} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
