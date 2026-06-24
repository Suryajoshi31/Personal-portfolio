import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-indigo-50 dark:from-indigo-900/20 to-transparent opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5 lg:w-1/3"
          >
             <div className="sticky top-32 space-y-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">About Me</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                  Driven by <br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">
                    Curiosity
                  </span> <br/>
                  & Innovation
                </h2>
             </div>
          </motion.div>

          <div className="md:w-3/5 lg:w-2/3 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-none"
            >
              <p className="text-2xl font-medium text-slate-900 dark:text-white mb-6 leading-tight">
                Hello! I’m <span className="text-indigo-600 dark:text-indigo-400 font-bold">Surya Joshi</span>, a Computer Engineering student dedicated to crafting modern software solutions.
              </p>
              
              <p>
                My journey in technology is fueled by a passion for solving complex problems through elegant code. Whether it's developing robust web applications or exploring the frontiers of Machine Learning, I strive for excellence in every line I write.
              </p>

              <p>
                Currently, I am deep-diving into <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-semibold text-sm whitespace-nowrap border border-indigo-100 dark:border-indigo-800 shadow-sm">Full-Stack Development</span> and <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full font-semibold text-sm whitespace-nowrap border border-emerald-100 dark:border-emerald-800 shadow-sm">Artificial Intelligence</span>. I believe in the power of technology to simplify lives and empower communities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:border-indigo-100 dark:hover:border-indigo-700 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Web Development</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Crafting responsive and interactive user interfaces using modern frameworks like React and Next.js.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 hover:border-emerald-100 dark:hover:border-emerald-700 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Machine Learning</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Building predictive models and diagnostic tools using Python, TensorFlow, and advanced CNN architectures.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
