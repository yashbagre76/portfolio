import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Git", "Tailwind", "Prisma", "MongoDB", "Redux",
  "Express", "PostgreSQL", "Python", "Django", "Framer Motion"
];

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-black px-6 md:px-20 py-16 font-sans flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-12 tracking-wide">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl text-center font-semibold bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-gray-100 shadow-md cursor-pointer hover:shadow-pink-500/50 border border-gray-700"
              
              // animation when it appears
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              
              // hover effects
              whileHover={{ scale: 1.1, backgroundColor: "#ec4899" }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillSection;
