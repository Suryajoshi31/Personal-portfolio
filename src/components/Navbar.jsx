import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line, RiMoonFill, RiSunFill } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenu(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20 dark:border-slate-800 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="relative text-2xl font-black tracking-tighter cursor-pointer text-slate-900 dark:text-white group flex items-center gap-1"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-emerald-400">
            SURYA
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-600 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
          </button>
        </div>

        {/* Mobile Menu Icon & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-800 dark:text-white bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm transition cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
          </button>
          <button
            onClick={() => setMenu(!menu)}
            className="p-2 text-slate-800 dark:text-white bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {menu ? <RiCloseLine size={24} /> : <RiMenu2Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="text-xl font-bold text-slate-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >

              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
