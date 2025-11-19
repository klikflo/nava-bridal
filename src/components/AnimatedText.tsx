import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0,
  stagger = false 
}: AnimatedTextProps) => {
  const text = typeof children === 'string' ? children : '';
  
  if (stagger && text) {
    // Split text into words for stagger animation
    const words = text.split(' ');
    
    return (
      <span className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: delay + (i * 0.1),
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;

