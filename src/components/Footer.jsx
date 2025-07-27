import React from "react";
import { FaSpotify, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPolywork, SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-500">
      <div className="max-w-5xl mx-auto px-6 py-6">
        {/* Spotify Now Playing */}
        <div className="flex items-center justify-start space-x-2 pb-4">
          <FaSpotify className="text-green-500" />
          <span className="font-semibold text-black">Not Playing</span>
          <span>– Spotify</span>
        </div>

        <hr className="mb-8 border-gray-300" />

        {/* Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-10 text-gray-400 text-xl cursor-pointer">
          <div className="flex flex-col space-y-4">
            <Link to="/">
              <p className="hover:text-gray-900">Home</p>
            </Link>
            <Link to="/blog">
              <p className="hover:text-gray-900">Blog</p>
            </Link>
            <Link to="/projects">
              <p className="hover:text-gray-900">Projects</p>
            </Link>
            <Link to="/links">
              <p className="hover:text-gray-900">Links</p>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href="https://github.com/kiransatdive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">GitHub</p>
            </a>
            <a
              href="https://linkedin.com/in/kiran-satdive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">LinkedIn</p>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">Twitter</p>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">Instagram</p>
            </a>
            <a
              href="https://www.freelancer.in/u/KiranSatdive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">Freelancing</p>
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">freeCodeCamp</p>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">Box Shadows</p>
            </a>
            <a
              href="https://manuarora.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:text-gray-900 cursor-pointer">
                Design Inspiration
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4 text-gray-400">
          <div className="flex items-center space-x-3">
            <span className="text-sm">Find me on</span>
            <FaXTwitter
              className="text-black hover:text-blue-500 cursor-pointer"
              size={18}
            />
            <FaGithub
              className="text-black hover:text-gray-800 cursor-pointer"
              size={18}
            />
            <FaLinkedin
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
              size={18}
            />
            <SiLeetcode
              className="text-orange-500 hover:text-orange-600 cursor-pointer"
              size={18}
            />
            <SiPolywork
              className="text-green-500 hover:text-green-600 cursor-pointer"
              size={18}
            />
          </div>
          <p className="text-sm">Portfolio inspired by <span className="hover:text-blue-900 cursor-pointer">Manu Arora</span></p>
        </div>
      </div>
    </footer>
  );
}
