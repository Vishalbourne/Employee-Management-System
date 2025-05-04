import React from 'react';
import { motion } from 'framer-motion';

const TaskListNumber = ({ data }) => {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      className="flex mt-10 justify-between gap-5 screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="rounded-xl w-[45%] py-6 px-9 bg-red-400"
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 0.1 }}
      >
        <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </motion.div>
      <motion.div
        className="rounded-xl w-[45%] py-6 px-9 bg-blue-400"
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </motion.div>
      <motion.div
        className="rounded-xl w-[45%] py-6 px-9 bg-green-400"
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </motion.div>
      <motion.div
        className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400"
        {...animationProps}
        transition={{ ...animationProps.transition, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </motion.div>
    </motion.div>
  );
};

export default TaskListNumber;
