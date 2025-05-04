import React from 'react';
import { motion } from 'framer-motion';

const CompleteTask = ({ e }) => {
  return (
    <motion.div
      className="flex-shrink-0 h-full w-[350px] p-5 bg-emerald-400 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="bg-red-600 text-md px-3 py-1 rounded-xl">High</h3>
        <h4 className="text-md">{e.data.date}</h4>
      </motion.div>
      <motion.h2
        className="mt-5 text-2xl font-semibold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {e.data.title}
      </motion.h2>
      <motion.p
        className="text-md font-semibold mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {e.data.description}
      </motion.p>
      <motion.div
        className="flex justify-center items-center bg-blue-500 py-1 px-2 w-full h-[120px] text-xl font-medium rounded-xl mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Failed
      </motion.div>
    </motion.div>
  );
};

export default CompleteTask;