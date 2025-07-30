const HeroSection = () => {
    return (
     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-lg rounded-full px-7 py-4 flex space-x-8 shadow-lg z-50">
  <a className="text-white font-medium hover:text-gray-300 transition-all cursor-pointer">Home</a>
  <a className="text-white font-medium hover:text-gray-300 transition-all cursor-pointer">About</a>
  <a className="text-white font-medium hover:text-gray-300 transition-all cursor-pointer">Skills</a>
  <a className="text-white font-medium hover:text-gray-300 transition-all cursor-pointer">Experience</a>
  <a className="text-white font-medium hover:text-gray-300 transition-all cursor-pointer">Projects</a>
  <a className="text-white font-medium hover:text-gray-300 transition-all cursor-pointer">Contact</a>
</nav>
    );
  };
  
  export default HeroSection;
  