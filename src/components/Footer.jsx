import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/krishnapriyakom" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com/krishnapriya-14" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-300 hover:text-blue-400">
            <FaGithub size={22} />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Krishna Priya Kommineni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

