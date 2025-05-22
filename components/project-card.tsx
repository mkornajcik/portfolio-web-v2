"use client";

import { useState } from "react";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { div } from "framer-motion/client";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="rounded-lg pr-10 pl-10 pt-10 pb-10 hover:shadow-lg transition-all border-1 border-[#cba6f7]"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {!project.title && (
        <div className="flex justify-center content-center">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkornajcik?tab=repositories">
            <h3 className="text-xl font-semibold text-[#89b4fa] hover:shadow-sm">More projects →</h3>
          </a>
        </div>
      )}
      <div className="flex flex-col group relative mb-3 w-full">
        {project.image && (
          <div className="group relative rounded-lg w-full">
            <svg viewBox="0 0 1800 950" className="w-full h-auto rounded-xl size-full">
              <image
                href={`/${project.image}`}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                className="block size-full"
              />
            </svg>
          </div>
        )}
      </div>

      {project.title && (
        <div className="flex justify-start items-center">
          <h3 className="text-xl font-semibold text-[#89b4fa] mb-2">{project.title}</h3>
        </div>
      )}

      {project.description && (
        <div className="flex justify-between items-center">
          <p className={`text-[#bac2de] text-sm mb-4 ${isExpanded ? "" : "line-clamp-3"}`}>{project.description}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-1 mt-2">
        {project.technologies &&
          project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-[#45475a] text-[#a6e3a1]">
              {tech}
            </span>
          ))}
      </div>

      {project.demo && project.demo.trim() !== "" && (
        <div className="flex items-center mt-5 justify-between">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-[#45475a] rounded-md transition-colors flex bg-[#313244] justify-between items-center"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              className="mr-1 text-[#a6e3a1] fill-current"
            >
              <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
            </svg>
            <p className="text-[#a6e3a1] text-xs">View project</p>
          </a>

          {project.technologies && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#45475a] rounded-md transition-colors flex bg-[#313244] justify-between items-center"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                className="mr-1 text-[#89b4fa] fill-current"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <p className="text-[#89b4fa] text-xs">View code</p>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
