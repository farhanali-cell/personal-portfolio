import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import ProfileOrbit from "../ui/ProfileOrbit";

export default function Home({ setActiveSection }) {
  return (
    <section className="relative flex flex-col xl:flex-row items-center justify-center min-h-[80vh] gap-6 sm:gap-8 md:gap-10 xl:gap-14 px-4 sm:px-6 xl:px-0 py-10 xl:py-0 text-center xl:text-left">
      {/* Text Content */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md shrink-0 mx-auto xl:mx-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
        >
          Farhan Ali.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed"
        >
          Full Stack Web Developer building practical applications with React
          and Django | clean frontends, solid real-world functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 items-center xl:items-start justify-center xl:justify-start"
        >
          <button
            onClick={() => setActiveSection("projects")}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium
            hover:bg-gray-200 transition-all duration-300 cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/20 text-white text-sm font-medium
            hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            Let's Talk
          </button>
          <a
            href="/Farhan_Ali_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/20 text-white text-sm font-medium
            hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Eye size={16} />
            Preview CV
          </a>
        </motion.div>
      </div>

      {/* Profile Orbit — har screen par visible, chhoti/mid screens par scaled down */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex shrink-0 scale-75 sm:scale-90 md:scale-100 xl:scale-100 origin-center"
      >
        <ProfileOrbit />
      </motion.div>
    </section>
  );
}
