import React from "react";
import { motion } from "framer-motion";
import { RiGithubFill, RiExternalLinkLine } from "@remixicon/react";

import legalImg from "../assets/legal.png";
import pneumoniaImg from "../assets/pneumonia.png";
import weatherImg from "../assets/weather.png";
import recipecover from "../assets/recipecover.png"

const projectsList = [
  {
    id: 1,
    title: "Nepali Legal Assistant for Traffic and  Citizenship Services",
    description:
      "A comprehensive application designed to provide rule and regulation to users about citizenship and traffic.",
    image: legalImg,
    tags: ["React", "Tailwind CSS", "Python", "NLP","RAG"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Pneumonia Detection",
    description:
      "An AI-powered tool that analyzes chest X-rays to detect signs of pneumonia using advanced machine learning models.",
    image: pneumoniaImg,
    tags: ["Python", "Machine Learning", "React", "FastAPI"],
    githubLink: "https://github.com/Suryajoshi31/PneumoniaDetectionSystem.git",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A sleek and responsive weather application providing real-time forecasts, interactive maps, and detailed climate data.",
    image: weatherImg,
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    githubLink: "https://github.com/Suryajoshi31/Weather-Application.git",
    liveLink: "#",
  },
   {
    id: 4,
    title: "Recipe Application",
    description:
      "A responsive recipe-sharing platform where users can discover delicious recipes, search by ingredients, and follow step-by-step cooking instructions.",
    image: recipecover,
    tags: ["React", "TheMealdb API", "Tailwind CSS"],
    githubLink: "https://github.com/Suryajoshi31/Recipe-app",
    liveLink: "https://food-recipe-omega-six.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Project = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            PROJECTS
          </h2>
          
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {projectsList.map((project) => (
            <motion.div
              variants={itemVariants}
              key={project.id}
              className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    title="View Source"
                  >
                    <RiGithubFill size={24} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                    title="Live Preview"
                  >
                    <RiExternalLinkLine size={24} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-2xl mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full border border-indigo-100 dark:border-indigo-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;