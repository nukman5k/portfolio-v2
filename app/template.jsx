'use client';

import { motion } from 'framer-motion';

//hooks
import useScrollProgress from '@/hooks/useScrollProgress';

//variants
const variants = {
  hidden: {
    opacity: 0
  },
  enter: {
    opacity: 1
  }
}

const Template = ({ children }) => {
  const complete = useScrollProgress();


  return (
    <>
      <motion.main variants={variants} initial="hidden" animate={complete ? "enter" : "hidden"}
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}>
        {children}
      </motion.main>
      {/* completion bar */}
      <span className="fixed" z50 big-primary-bg bottom-0 left-0 right-0 h-1>

      </span>
    </>
  )
}

export default Template;