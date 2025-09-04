import { motion } from "framer-motion";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const projectData = [
  {
    title: "Nike E-commerce",
    img: "/static/images/cards/contemplative-reptile.jpg",
    desc: "An e-commerce website built with React.js, Redux Toolkit, and Tailwind, featuring product filtering, cart system, and responsive UI.",
  },
  {
    title: "Travel Booking Website",
    img: "/static/images/cards/contemplative-reptile.jpg",
    desc: "A responsive travel booking platform where users can explore tours, check details, and book trips seamlessly.",
  },
  {
    title: "Portfolio Website",
    img: "/static/images/cards/contemplative-reptile.jpg",
    desc: "My personal portfolio built with React, Tailwind CSS, Framer Motion animations, showcasing my skills and projects.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black py-16 px-6 font-sans"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-white text-center font-extrabold text-4xl md:text-6xl mb-12 tracking-wide"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              sx={{
                maxWidth: 400,
                backgroundColor: "#111",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(255,255,255,0.1)",
              }}
            >
              <CardMedia
                component="img"
                alt={project.title}
                height="180"
                image={project.img}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {project.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "white" }}>
                  Live Demo
                </Button>
                <Button size="small" sx={{ color: "white" }}>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
