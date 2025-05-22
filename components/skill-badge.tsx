"use client";

import type React from "react";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  children: React.ReactNode;
  icon?: string;
}

export default function SkillBadge({ children, icon }: SkillBadgeProps) {
  return (
    <motion.span
      className="px-3 py-1 bg-[#45475a] text-[#cdd6f4] rounded-md inline-block"
      whileHover={{ scale: 1.05, backgroundColor: "#585b70" }}
      transition={{ duration: 0.2 }}
    >
      {icon && <img src={icon} alt="" width={25} height={25} className="inline-block align-middle mr-0.5" />}
      {children}
    </motion.span>
  );
}
