import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.05, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: false
  });

  return { ref, isInView };
};

export const useParallax = (offset = 100) => {
  const ref = useRef(null);

  return { ref };
};