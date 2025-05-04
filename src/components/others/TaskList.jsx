import React from 'react';
import { motion } from 'framer-motion';
import AcceptTask from '../TaskList/AcceptTask';
import NewTask from '../TaskList/NewTask';
import CompleteTask from '../TaskList/CompleteTask';
import FailedTask from '../TaskList/FailedTask';

const TaskList = ({ data }) => {
  return (
    <motion.div
      id="tasklist"
      className="flex items-center justify-start gap-5 flex-nowrap overflow-x-auto w-full py-5 h-[55%] mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {data.tasks.map((task, index) => {
        const animationProps = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: index * 0.1 },
        };

        if (task.newTask) {
          return (
            <motion.div key={index} {...animationProps}>
              <NewTask e={{ data: task, index }} />
            </motion.div>
          );
        } else if (task.completed) {
          return (
            <motion.div key={index} {...animationProps}>
              <CompleteTask e={{ data: task, index }} />
            </motion.div>
          );
        } else if (task.failed) {
          return (
            <motion.div key={index} {...animationProps}>
              <FailedTask e={{ data: task, index }} />
            </motion.div>
          );
        } else {
          return (
            <motion.div key={index} {...animationProps}>
              <AcceptTask e={{ data: task, index }} />
            </motion.div>
          );
        }
      })}
    </motion.div>
  );
};

export default TaskList;