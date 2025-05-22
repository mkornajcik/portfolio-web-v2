"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      className="text-2xl font-bold mb-6 text-[#cba6f7] relative inline-block"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-1 bg-[#cba6f7] rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.h2>
  )
}
