import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addTaskToEmployee } from '../../utils/localStorage';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdTask = {
      title,
      dueDate,
      assignee,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    addTaskToEmployee(createdTask, createdTask.assignee);

    // Reset form
    setTitle('');
    setDueDate('');
    setAssignee('');
    setCategory('');
    setDescription('');

    alert(`Task successfully assigned to ${assignee}`);
  };

  return (
    <motion.div
      className="flex w-full mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="flex bg-[#1c1c1c] p-8 rounded-xl justify-between shadow-md w-full h-full space-y-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="flex flex-col w-[40%] gap-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Task Title */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="text-sm font-medium text-gray-700">Task Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full border border-emerald-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </motion.div>

          {/* Due Date */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border border-emerald-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </motion.div>

          {/* Assign To */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label className="text-sm font-medium text-gray-700">Assign To</label>
            <input
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="Enter assignee name"
              className="w-full border border-emerald-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </motion.div>

          {/* Category */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border bg-[#1c1c1c] border-emerald-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            >
              <option value="">Select category</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="improvement">Improvement</option>
              <option value="UI">UI Enhancement</option>
              <option value="backend">Backend Logic</option>
              <option value="database">Database</option>
              <option value="api">API Integration</option>
              <option value="testing">Testing</option>
              <option value="deployment">Deployment</option>
              <option value="documentation">Documentation</option>
              <option value="performance">Performance</option>
              <option value="security">Security</option>
            </select>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col w-[40%] gap-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Description */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              className="w-full border h-[250px] border-emerald-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold hover:bg-emerald-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Create Task
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default CreateTask;
