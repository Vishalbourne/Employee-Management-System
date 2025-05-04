import React, { useContext } from 'react';
import { motion } from 'framer-motion';

const Header = ({ data, handleLogout }) => {
  const logoutHandler = () => {
    handleLogout();
  };

  return (
    <motion.div
      className="flex justify-between items-end"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-2xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hello,<br />
        <motion.span
          className="text-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {data.name}
        </motion.span>{' '}
        👋
      </motion.h1>
      <motion.button
        className="w-20 h-10 bg-red-500 rounded-md text-xl font-semibold hover:bg-red-800"
        onClick={logoutHandler}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
      >
        Log Out
      </motion.button>
    </motion.div>
  );
};

export default Header;
