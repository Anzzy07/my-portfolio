"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[53rem] w-full"
    >
      <SectionHeading>My Experience</SectionHeading>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

        <div className="flex flex-col gap-8">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col sm:flex-row gap-4 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Icon dot on the line */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center z-10 shadow-md">

                  <FaBriefcase className="text-white text-sm" />
   
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />

              {/* Card */}
              <div
                className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] bg-white border border-black/5 rounded-xl p-5 shadow-sm hover:shadow-md transition hover:bg-gray-50 ${
                  index % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
                }`}
              >
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {exp.description}
                </p>
                {exp.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((tag, i) => (
                      <li
                        key={i}
                        className="bg-black/[0.07] px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-gray-700 rounded-full"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
