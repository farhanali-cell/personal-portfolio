import { motion } from "framer-motion";

const orbitIcons = ["React", "JS", "Py", "Dj", "HTML", "CSS", "Git", "Node"];

export default function Globe() {
  const radius = 170; // orbit radius in px

  return (
    <div className="relative w-85 h-85 md:w-100 md:h-100 flex items-center justify-center pointer-events-none">
      {/* Rotating Sphere */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 1px, transparent 22px)",
          backgroundSize: "200% 100%",
        }}
        className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden
                   bg-linear-to-br from-gray-700/50 via-gray-900 to-black
                   border border-white/10 shadow-[0_0_90px_15px_rgba(255,255,255,0.08)]"
      >
        {/* latitude lines */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 19px, rgba(255,255,255,0.06) 20px)",
          }}
        />
        {/* light sheen */}
        <div className="absolute -top-8 -left-8 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
      </motion.div>

      {/* Orbit ring with icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {orbitIcons.map((icon, i) => {
          const angle = (360 / orbitIcons.length) * i;
          return (
            <div
              key={icon}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 -ml-5 -mt-5 rounded-full bg-black/60 backdrop-blur-md
                           border border-white/15 flex items-center justify-center
                           text-[10px] font-semibold text-white shadow-lg"
              >
                {icon}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
