import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Git", "Tailwind", "Prisma", "MongoDB", "Redux",
  "Express", "PostgreSQL", "Python", "Django", "Framer Motion"
];

const SkillSection = () => {
  return (
    <div className="w-full flex flex-col min-h-screen px-6 py-10 bg-black font-sans">
      <h2 className="text-center text-4xl font-extrabold text-gray-100 font-serif mb-10 tracking-wide">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.p
            key={index}
            className="p-2 rounded-full text-black text-center bg-blue-50 shadow-md cursor-pointer"
            
            // animation when it first appears
            initial={{ opacity: 0, y: 30 }}     // hidden
            animate={{ opacity: 1, y: 0 }}      // visible
            transition={{ duration: 0.5, delay: index * 0.1 }} // stagger
            
            // small hover effect
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.p>
        ))}
      </div>
    </div>
  ); 
};

export default SkillSection;
