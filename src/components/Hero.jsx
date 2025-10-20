import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[86vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 px-6"
    >
      <img
  src="https://raw.githubusercontent.com/krishnapriya-14/portfolio/main/public/Profile.png"
        alt="Krishna Priya Kommineni"
        className="w-36 h-36 rounded-full mb-6 shadow-xl border-4 border-white dark:border-gray-800 object-cover"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
        Krishna Priya Kommineni
      </h1>

      <p className="text-lg md:text-xl font-medium mb-3 text-gray-700 dark:text-gray-200">
        Full-Stack & Mobile Engineer | React, Java, Spring Boot, iOS
      </p>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
        Cloud & GenAI Solutions 
      </p>

      <div className="flex gap-6 mb-8">
        <a
          href="https://www.linkedin.com/in/krishnapriyakom"
          target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md hover:scale-110 transition-transform"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={26} />
        </a>
        <a
          href="https://github.com/krishnapriya-14"
          target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 shadow-md hover:scale-110 transition-transform"
          aria-label="GitHub"
        >
          <FaGithub size={26} />
        </a>
      </div>

      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
          Contact Me
        </a>
      </div>
    </section>
  );
}
