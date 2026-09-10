import { motion } from "framer-motion";
import profilePic from "../../assets/profile.jpg";

const orbitIcons = ["React", "JS", "Py", "Dj", "HTML", "CSS", "Git", "Node"];

export default function ProfileOrbit() {
  const radius = 140;

  return (
    <div className="relative w-80 h-80 flex items-center justify-center pointer-events-none">
      {/* Profile Image */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 50px 8px rgba(255,255,255,0.08)",
            "0 0 80px 20px rgba(255,255,255,0.15)",
            "0 0 50px 8px rgba(255,255,255,0.08)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-52 h-52 rounded-full overflow-hidden border border-white/15"
      >
        <img
          src={profilePic}
          alt="Farhan Ali"
          className="w-full h-full object-cover"
        />
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
                className="w-9 h-9 -ml-4.5 -mt-4.5 rounded-full bg-black/60 backdrop-blur-md
                           border border-white/15 flex items-center justify-center
                           text-[9px] font-semibold text-white shadow-lg"
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
