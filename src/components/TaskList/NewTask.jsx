import React from 'react';
import { motion } from 'framer-motion';

const NewTask = ({ e }) => {
  return (
    <motion.div
      className="flex-shrink-0 h-[19rem] w-[350px] p-5 bg-blue-400 rounded-2xl"
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

      {/* Center the buttons */}
      <motion.div
        className="flex flex-col gap-5 justify-center items-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          className="bg-green-500 py-2 px-4 text-sm w-[310px] font-medium text-white rounded-xl hover:bg-green-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Accept Task
        </motion.button>

        <motion.button
          className="bg-red-500 py-2 px-4 text-sm w-[310px] font-medium text-white rounded-xl hover:bg-red-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reject Task
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default NewTask;


