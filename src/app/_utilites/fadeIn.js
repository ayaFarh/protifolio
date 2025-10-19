export const fadeIn = (delay) => ({
  hidden: { opacity: 0, y: 100, scale: 0.5 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { delay, duration: 0.5, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0, 
    y: 50, 
    scale: 1, 
    transition: { delay, duration: 0.2, ease: "easeInOut" }
  }
});