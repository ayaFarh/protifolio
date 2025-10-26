"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll"; // <-- هنا

export default function Arrow() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, 
      smooth: "easeInOutQuad", 
    });
  };

  return (
    <AnimatePresence>
      {showArrow && (
        <motion.div
          key="arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="shadow-lg hover:shadow-xl fixed bottom-14 right-5 p-3 rounded-full bg-gradient-to-t from-[#300d09] to-[#481709] cursor-pointer hover:scale-110 transition"
        >
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            <MdOutlineKeyboardArrowUp className="text-2xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
