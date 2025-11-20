import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, hsl(15, 35%, 75%) 0%, hsl(15, 35%, 65%) 50%, hsl(15, 35%, 55%) 100%)'
      }}
    />
  );
};

export default ScrollProgress;

