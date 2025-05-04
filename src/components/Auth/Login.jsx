import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ handleLogin }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(Email, Password);

    setEmail("");
    setPassword("");
  };

  return (
    <motion.div
      className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="border-2 border-emerald-600 p-10 rounded-xl backdrop-blur-lg bg-white/10 shadow-2xl w-150 h-100 justify-center flex flex-col items-center space-y-6 gap-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-emerald-500 text-2xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome Back
        </motion.h2>

        <motion.form
          className="w-full flex flex-col space-y-5 gap-4 items-center"
          onSubmit={submitHandler}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            className="border-2 h-12 border-emerald-600 outline-none bg-transparent text-lg rounded-full px-4 py-2 w-80 text-white placeholder-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-all text-center"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={Email}
          />
          <input
            className="border-2 h-12 border-emerald-600 outline-none bg-transparent text-lg rounded-full px-4 py-2 w-80 text-white placeholder-emerald-400 focus:ring-2 focus:ring-emerald-500 transition-all text-center"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={Password}
          />
          <motion.button
            className="w-40 h-12 border-2 border-emerald-600 text-emerald-600 py-2 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-emerald-500"
            whileHover={{ scale: 1.1 }}
            transition={{duration:0.1}}
            whileTap={{ scale: 0.9 }}
          >
            Log In
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Login;