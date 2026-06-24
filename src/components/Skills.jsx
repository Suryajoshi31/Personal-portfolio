import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiReactjsFill,
  RiGithubFill,
  RiDatabase2Fill,
} from "@remixicon/react";

import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const skillList = [
  { name: "HTML5", icon: <RiHtml5Fill className="text-orange-500" /> },
  { name: "CSS3", icon: <RiCss3Fill className="text-blue-500" /> },
  { name: "JavaScript", icon: <RiJavascriptFill className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-500" /> },
  { name: "React JS", icon: <RiReactjsFill className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-slate-700 dark:text-slate-300" /> },
  { name: "MongoDB", icon: <RiDatabase2Fill className="text-emerald-500" /> },
  { name: "Git & GitHub", icon: <RiGithubFill className="text-slate-800 dark:text-slate-200" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            SKILLS
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {skillList.map((skill, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="group bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:border-indigo-100 dark:hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                <div className="text-6xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-sm">
                  {skill.icon}
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;