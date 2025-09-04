import { Link } from "react-scroll";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-lg rounded-full px-7 py-4 flex space-x-8 shadow-lg z-50"
    >
      {navItems.map((item) => (
        <Link
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          spy={true} // 👈 highlight jab section active hoga
          offset={-70}
          duration={500}
          activeClass="text-pink-400 font-bold border-b-4 border-pink-400"
          className="text-white font-medium hover:text-gray-300 transition-all cursor-pointer"
        >
          {item}
        </Link>
      ))}
    </motion.nav>
  );
};

export default HeroSection;
