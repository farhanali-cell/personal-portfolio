import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { services } from "../../data/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function Services({ setActiveSection }) {
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
          What I Offer
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My Services.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl">
          From idea to a working product: clean interfaces, solid backends, and
          everything in between.
        </p>
      </motion.div>

      {/* Services grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-emerald-400/40 hover:bg-white/[0.07] transition-colors duration-300"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.16),transparent_60%)]" />

              {/* Faded watermark icon */}
              <Icon
                size={150}
                strokeWidth={1}
                className="pointer-events-none absolute -right-8 -bottom-8 text-white/3 group-hover:text-emerald-300/10 transition-colors duration-500"
              />

              <div className="relative">
                {/* Top row: icon tile + arrow */}
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-400/15 group-hover:border-emerald-400/30 group-hover:shadow-[0_0_24px_rgba(52,211,153,0.25)] transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-white group-hover:text-emerald-300 transition-colors duration-300"
                    />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                {/* Title + description */}
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[11px] sm:text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 group-hover:border-white/20 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        className="relative overflow-hidden mt-8 sm:mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.12),transparent_55%)]" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              Open for freelance projects
            </p>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Have a project in mind?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg">
            Tell me what you need and let&apos;s turn it into something clean,
            fast, and ready for real users.
          </p>
        </div>

        <button
          onClick={() => setActiveSection("contact")}
          className="relative group/btn shrink-0 flex items-center justify-center gap-2 bg-white text-black font-medium text-sm sm:text-base px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-300"
        >
          Let&apos;s Work Together
          <ArrowRight
            size={18}
            className="group-hover/btn:translate-x-1 transition-transform duration-300"
          />
        </button>
      </motion.div>
    </div>
  );
}
