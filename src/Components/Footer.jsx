import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="contact"
      className="w-full bg-black py-16 px-6 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-black opacity-60"></div>

      <div className="relative z-10">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
            Contact Me
          </h3>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let’s connect! You can reach me directly at{" "}
            <span className="text-pink-400 font-semibold">
              yashbagre76@gmail.com
            </span>
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8"
        >
          <a
            href="mailto:yashbagre76@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition-all"
          >
            <FaEnvelope className="text-white text-2xl" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition-all"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition-all"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-gray-800 pt-6"
        >
          <p className="text-gray-400 text-sm mb-2">
            © 2025 <span className="text-white font-semibold">Yash</span>. All
            Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Built with React, JavaScript, Tailwind CSS, Framer Motion, React
            Scroll, and deployed on Vercel.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
