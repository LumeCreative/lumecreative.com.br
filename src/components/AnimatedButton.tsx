import React from 'react';
import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';

interface AnimatedButtonProps extends ButtonProps {
  hoverScale?: number;
  tapScale?: number;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  hoverScale = 1.05,
  tapScale = 0.95,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: tapScale,
        transition: { duration: 0.1 }
      }}
    >
      <Button
        className={`transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${className}`}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;