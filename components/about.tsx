"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hi, I'm Anzel Acharya. I completed my Bachelor's in{" "}
        <span className="font-medium">Computing</span>. I decided to pursue my
        passion for programming when I enrolled in college. I watched YouTube
        videos and learned{" "}
        <span className="font-medium">
          frontend development and am currently learning full-stack web
          development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, and soon it will include Next.js
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        aviation videos, working out, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am actively
        reading books on{" "}
        <span className="font-medium">health and self-development</span>.
      </p>
    </motion.section>
  );
}
