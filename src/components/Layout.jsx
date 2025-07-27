/* eslint-disable no-unused-vars */
// components/Layout.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <motion.div
      className="max-w-5xl  mx-auto px-6 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
