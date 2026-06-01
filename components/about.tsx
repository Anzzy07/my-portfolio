"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
  Hi, I'm Anzel Acharya based in{" "}
  <span className="font-medium">Kathmandu, Nepal</span>. I completed my
  Bachelor's in <span className="font-medium">Computing</span> and somehow
  ended up deep in{" "}
  <span className="font-medium">React Native & mobile development</span>{" "}
  (YouTube did most of the teaching, not going to lie).{" "}
  <span className="italic">My favorite part of programming</span> is when
  something finally works after an hour of debugging {" "}
  <span className="underline">that feeling never gets old</span>. My core
  stack is{" "}
  <span className="font-medium">
    React Native, TypeScript, and I'm pushing into full-stack with Node/Go &
    Next.js
  </span>
  . Always looking for the next thing to break and then fix.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I'm watching airplane
  spotting videos, working out, or bothering my dog. I also enjoy{" "}
  <span className="font-medium">learning new things</span> currently
  reading up on{" "}
  <span className="font-medium">health, and whatever
  rabbit hole I fall into next</span>.
</p>
    </motion.section>
  );
}
