import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../Pages/assets/image/logo.jpg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Gallery", path: "/gallery" },
  { name: "Coach", path: "/coach" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20
        transition-colors duration-500
        ${
          scrolled
            ? "bg-[#0b1411]/90 backdrop-blur border-b border-[#1f2a26]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20
          h-full flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Sanskriti Tennis Academy"
              className="h-9 w-9 object-contain"
            />
            <span className="hidden sm:block text-sm tracking-wide
              text-[#e6f2ee] font-medium">
              Sanskriti Tennis Academy
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors
                  ${
                    isActive
                      ? "text-[#8fbfa9]"
                      : "text-[#b8cbc3] hover:text-[#e6f2ee]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-sm tracking-wide text-[#e6f2ee]"
          >
            Menu
          </button>
        </div>
      </header>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0b1411]"
          >
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full flex flex-col px-8 py-10"
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.35em] uppercase
                  text-[#8fbfa9]">
                  Navigation
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#e6f2ee]"
                >
                  Close
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col gap-10 mt-24">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-medium text-[#e6f2ee]
                    hover:text-[#8fbfa9] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* FOOT */}
              <p className="mt-auto text-xs tracking-wide text-[#8fbfa9]">
                International Tennis Development Program
              </p>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
