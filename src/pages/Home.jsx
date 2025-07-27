/* eslint-disable no-unused-vars */
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { ContainerTextFlipDemo } from "./ContainerTextFlipDemo";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-6 py-18 bg-white text-black max-w-5xl mx-auto gap-6">
      {/* Text Section */}
      <div className="text-center sm:text-left relative">
        <div className="flex items-center gap-2 text-6xl font-bold mb-3">
          <span>Kiran Satdive</span>
          <span>
            <ContainerTextFlipDemo />
          </span>
        </div>

        <p className="text-lg text-gray-600 font-medium mb-4">
          Building{" "}
          <span className="bg-gray-200 px-2 py-0.5 rounded font-medium text-gray-900">
            Infinity AI
          </span>
        </p>

        <p className="text-gray-600 text-lg font-medium">
          Software Engineer building SaaS products and web apps.
        </p>
        <p className="text-gray-600 text-lg font-medium">
          Find me on{" "}
          <span className="font-bold text-black inline-flex items-center gap-1">
            <FaTwitter className="text-blue-500" />
            twitter
          </span>{" "}
          for tech updates and memes.
        </p>
      </div>

      {/* Image */}
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src="/Profile.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-md object-cover shadow-md"
        />
      </div>
    </div>
  );
}
