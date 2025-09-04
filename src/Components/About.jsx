import { motion } from "framer-motion";
import { GiDiamondTrophy } from "react-icons/gi";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black px-6 md:px-20 py-16 flex items-center justify-center font-sans"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-wide">
          About Me
        </h1>

        {/* Paragraphs */}
        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          I am currently in my final year of BBA, but my true passion lies in
          technology and programming. Over the past few years, I have completed
          multiple Full Stack Development courses and built several projects
          that strengthened my expertise in modern web development.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          My core stack includes{" "}
          <span className="text-white font-semibold">
            JavaScript, React.js, Node.js, Express.js, and MongoDB
          </span>
          , and I am also familiar with tools like{" "}
          <span className="text-white font-semibold">Redux, GraphQL, Prisma</span>.
          I enjoy working on{" "}
          <span className="text-pink-400 font-semibold">
            animated, dynamic, and user-centric websites
          </span>{" "}
          with clean design and smooth performance.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          I am seeking a{" "}
          <span className="text-pink-400 font-semibold">
            full-time Software Developer role
          </span>{" "}
          where I can contribute to impactful projects, collaborate with
          talented teams, and grow as a professional.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed">
          Beyond coding, I enjoy{" "}
          <span className="text-white">boxing, running, cooking, movies</span>{" "}
          and continuously learning new skills to grow personally and
          professionally.
        </p>

        {/* Highlight Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mt-10 text-pink-400 font-semibold text-lg"
        >
          <GiDiamondTrophy className="text-3xl" />
          <span>Dedicated to Building & Learning Every Day</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
