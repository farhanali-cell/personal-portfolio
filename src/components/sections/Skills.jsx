import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const barVariants = {
  hidden: { width: "0%" },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  }),
};

export default function Skills() {
  return (
    <div className="min-h-screen px-5 sm:px-8 md:px-16 py-10 sm:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase mb-2">
          What I Work With
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My Skills.
        </h2>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-3.5 sm:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-[11px] sm:text-xs text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={barVariants}
                        initial="hidden"
                        animate="visible"
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
