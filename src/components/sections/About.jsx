import { motion } from "framer-motion";
import { timeline, stats } from "../../data/timeline";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 px-5 sm:px-8 md:px-16 py-10 sm:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About Me.
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
          bg-white/[0.035]
            backdrop-blur-md
            border border-white/10
            rounded-2xl
            p-5 sm:p-6 md:p-8
            mb-6 sm:mb-8
            max-w-3xl
          "
        >
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            I'm Farhan Ali, a self-taught full-stack developer and
            final-semester Computer Science student at Islamia University
            Bahawalpur, based in Punjab, Pakistan. Over the past two years I've
            taught myself React and Django from the ground up not just to follow
            tutorials, but to build real, working products: e-commerce
            platforms, booking systems, civic-tech tools, and
            machine-learning-powered applications.
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-4">
            I care about writing clean code and shipping interfaces that feel
            intentional not templated. Right now I'm focused on landing an
            internship, taking on freelance work, and continuing to build
            projects that push my frontend and backend skills further.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-3xl"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="
  bg-white/[0.035]
  backdrop-blur-md
  border border-white/10
  rounded-2xl
  p-5 sm:p-6
  text-center
  hover:bg-white/5.5
  hover:border-cyan-300/20
  transition-all
  duration-300
"
            >
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">
            My Journey
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative pl-6 sm:pl-8 max-w-3xl"
          >
            {/* vertical line */}
            <div
              className="
    absolute
    left-1.25
    sm:left-1.75
    top-2
    bottom-2
    w-px
    bg-linear-to-b
    from-cyan-300/30
    via-cyan-300/15
    to-transparent
  "
            />

            {timeline.map((item) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative mb-6 sm:mb-8 last:mb-0"
              >
                {/* dot */}
                <div
                  className="
    absolute
    -left-6.5
    sm:-left-8
    top-1.5
    w-3
    h-3
    sm:w-3.5
    sm:h-3.5
    rounded-full
    bg-cyan-200
    border-4
    border-black
    shadow-[0_0_12px_rgba(103,232,249,0.8)]
  "
                />

                <div
                  className="
  bg-white/[0.035]
  backdrop-blur-md
  border border-white/10
  rounded-2xl
  p-4 sm:p-5
  hover:bg-white/5.5
  hover:border-cyan-300/20
  transition-all
  duration-300
"
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                    <span className="text-xs font-semibold text-gray-500">
                      {item.year}
                    </span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{item.org}</span>
                  </div>
                  <h4 className="text-white font-medium mb-1 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
