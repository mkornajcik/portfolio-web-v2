"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isSubmitted ? (
        <div className="bg-[#313244] p-6 rounded-lg text-center z-10">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
            <div className="w-16 h-16 bg-[#a6e3a1] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#1e1e2e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#a6e3a1] mb-2">Message Sent!</h3>
            <p className="text-[#bac2de]">Thank you for reaching out. I will get back to you as soon as possible.</p>
          </motion.div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#313244] p-6 rounded-lg "
          action="https://formspree.io/f/xdkgbpgd"
          method="POST"
        >
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-[#bac2de] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1e1e2e] border border-[#45475a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cba6f7] text-[#cdd6f4] z-10"
            />
          </div>

          <div className="mb-4 ">
            <label htmlFor="email" className="block text-[#bac2de] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1e1e2e] border border-[#45475a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cba6f7] text-[#cdd6f4] "
            />
          </div>

          <div className="mb-6 ">
            <label htmlFor="message" className="block text-[#bac2de] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 bg-[#1e1e2e] border border-[#45475a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cba6f7] text-[#cdd6f4] z-10"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors ${
              isSubmitting ? "bg-[#45475a] cursor-not-allowed" : "bg-[#cba6f7] hover:bg-[#f5c2e7] text-[#1e1e2e]"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#1e1e2e] border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
