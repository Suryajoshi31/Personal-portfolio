import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm();

  const containerRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    // GSAP ScrollTrigger animation for the form fields
    const inputs = gsap.utils.toArray('.gsap-input');
    
    gsap.fromTo(
      inputs,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%", // triggers when top of form hits 80% of viewport
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      '.gsap-button',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: containerRef });

  const onSubmit = (data)=>{
    console.log(data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 space-y-10"
          >
            <div>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase mb-3 block">Contact</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                LET'S <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">CONNECT</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                Have a project in mind, a question, or just want to chat? Drop me a message and let's create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-start gap-6 p-4 -ml-4 rounded-2xl hover:bg-white dark:hover:bg-slate-950 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="bg-white dark:bg-slate-950 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 p-4 rounded-2xl text-indigo-600 dark:text-indigo-400 group-hover:text-white dark:group-hover:text-white shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-indigo-600 dark:group-hover:border-indigo-500 transition-colors duration-300">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-1">Phone</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">+977 9865460356</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-6 p-4 -ml-4 rounded-2xl hover:bg-white dark:hover:bg-slate-950 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
                <div className="bg-white dark:bg-slate-950 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-600 p-4 rounded-2xl text-emerald-500 dark:text-emerald-400 group-hover:text-white dark:group-hover:text-white shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 dark:group-hover:border-emerald-600 transition-colors duration-300">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-1">Email</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">itsmesurya442@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-900/5 dark:shadow-[0_8px_40px_rgb(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 relative">
              {/* Subtle top highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 dark:via-indigo-400 to-transparent opacity-20 dark:opacity-40"></div>

              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 gsap-input">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      placeholder=""
                      {...register("name", { required: "*Name is required" })}
                      className="w-full p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2 gsap-input">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder=""
                      {...register("email", {
                        required: "*Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "*Enter a valid email" }
                      })}
                      className="w-full p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2 gsap-input">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-wider">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows="5"
                    {...register("message", { required: "*Message is required" })}
                    className="w-full p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-500/20 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none resize-none font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="gsap-button w-full bg-slate-900 dark:bg-indigo-500 cursor-pointer text-white py-5 rounded-2xl font-bold shadow-xl shadow-slate-900/20 dark:shadow-indigo-900/40 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/50 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 transform hover:-translate-y-1 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
