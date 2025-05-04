import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <motion.div
      className="flex flex-col bg-[#1c1c1c] p-5 rounded-xl shadow-md mt-5 gap-2 h-40 overflow-auto no-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex justify-between items-center bg-emerald-400 rounded h-10 w-full py-2 px-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-base font-medium w-1/5">Employee Name</h3>
        <h3 className="text-base font-medium w-1/5">New Task</h3>
        <h3 className="text-base font-medium w-1/5">Active Task</h3>
        <h3 className="text-base font-medium w-1/5">Completed</h3>
        <h3 className="text-base font-medium w-1/5">Failed</h3>
      </motion.div>
      {authData.employees.map((e, idx) => (
        <motion.div
          key={idx}
          className="flex justify-between items-center bg-transparent border-1 gap-0.5 border-emerald-400 rounded h-10 w-full py-2 px-4 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <h3 className="text-base font-medium w-1/5">{e.name}</h3>
          <h3 className="text-base font-medium w-1/5">{e.taskCount.newTask}</h3>
          <h3 className="text-base font-medium w-1/5">{e.taskCount.active}</h3>
          <h3 className="text-base font-medium w-1/5">{e.taskCount.completed}</h3>
          <h3 className="text-base font-medium w-1/5">{e.taskCount.failed}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AllTask;