import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


const MainSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-black px-6 md:px-20 lg:px-40 py-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl w-full">
        {/* Img section with animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/img2.jpeg"
            alt="profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-4 max-w-2xl"
        >
          <p className="font-semibold text-sm text-gray-400 uppercase tracking-wide">
            Hello, I am
          </p>
          <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight">
            Yash Bagre
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            MERN Stack Developer
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Passionate about crafting responsive, dynamic, and impactful web
            applications that bring ideas to life with modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
            <a className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-300"
            href="/yashbagreCV.pdf"
            download="Yash_Bagre_CV.pdf">
              Download CV
            </a>
            <a className="bg-gray-200 text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-all duration-300"
            href="#contact">
              Contact Info
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 justify-center md:justify-start mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
