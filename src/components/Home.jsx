import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate stats
    tl.fromTo(
      ".gsap-stat",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.8 // Wait for framer-motion text to come in
      }
    );
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-400/20 dark:bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 px-6 md:px-10 z-10 w-full">

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-7xl lg:text-[5rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Hi,  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-emerald-400 dark:from-indigo-400 dark:via-blue-400 dark:to-emerald-300">
                I'am Surya Joshi
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0 min-h-[40px]"
            >
              <span className="text-slate-900 dark:text-white font-semibold">
                <Typewriter
                  words={['Computer Engineering Student', 'Full-Stack Developer']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="group relative inline-flex items-center justify-center bg-slate-900 dark:bg-indigo-600 text-white py-4 px-8 rounded-full font-bold shadow-xl shadow-slate-900/20 dark:shadow-indigo-900/40 hover:shadow-indigo-500/25 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a href="/Surya_joshi_Resume.pdf" download className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 py-4 px-8 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1">
              Download CV
            </a>
          </motion.div>


        </div>

        {/* Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="relative group perspective-1000">
            {/* Animated Glow Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-emerald-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 animate-pulse"></div>

            <div className="relative bg-white dark:bg-slate-900 p-3 rounded-[3rem] shadow-2xl overflow-hidden border border-white/50 dark:border-white/10 backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-2">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src={profile}
                  alt="Surya Joshi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
