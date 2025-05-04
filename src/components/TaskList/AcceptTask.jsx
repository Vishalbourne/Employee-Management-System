import React from 'react';
import { motion } from 'framer-motion';

const AcceptTask = ({ e }) => {
  return (
    <motion.div
      className="flex-shrink-0 h-full w-[350px] p-6 bg-amber-400 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="bg-red-600 text-md px-4 py-2 rounded-xl text-white font-semibold">High</h3>
        <h4 className="text-md text-gray-700">{e.data.date}</h4>
      </motion.div>

      <motion.h2
        className="mt-4 text-2xl font-semibold text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {e.data.title}
      </motion.h2>
      <motion.p
        className="text-md text-gray-600 font-medium mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {e.data.description}
      </motion.p>

      <motion.div
        className="flex justify-between items-center mt-6 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          className="w-full py-2 px-4 bg-green-500 text-white text-sm font-medium rounded-xl hover:bg-green-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Task marked as completed')}
        >
          Mark as Completed
        </motion.button>
        <motion.button
          className="w-full py-2 px-4 bg-red-500 text-white text-sm font-medium rounded-xl hover:bg-red-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Task marked as failed')}
        >
          Mark as Failed
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AcceptTask;
