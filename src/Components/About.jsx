import { GiDiamondTrophy } from "react-icons/gi";
import aboutImg from "../assets/yash.jpeg";

const About = () => {
  return (
    <div className="w-full h-auto px-6 py-10 bg-black font-sans">
      {/* Heading */}
      <div className="text-center text-4xl font-extrabold text-gray-100 font-serif mb-10 tracking-wide">
        <h1>About Me</h1>
        
      </div>

 <div className="max-w-[800px] max-auto">
   <p className="text-lg font-medium text-center  text-gray-400 mt-4 leading-relaxed ">
           I am currently in my final year of BBA, but my true passion lies in technology and programming. Over the past few years, I have completed multiple Full Stack Development courses and built several projects that strengthened my expertise in modern web development.

My core stack includes <span className="text-white "> JavaScript, React.js, Node.js, Express.js, and MongoDB, and I am also familiar with advanced tools and frameworks such as Redux, GraphQL, and Prisma.</span> I enjoy working on animated, dynamic, and user-centric websites, always focusing on clean design and smooth performance.

I am seeking a full-time opportunity as a Software Developer where I can contribute to impactful projects, collaborate with talented teams, and grow as a professional.

Beyond coding, I enjoy boxing, running, cooking, watching movies, and constantly learning new skills to keep improving both personally and professionally.


        </p>
 </div>
      
      
      </div>
   
  );
};

export default About;
