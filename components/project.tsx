"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaEye, FaGithub } from "react-icons/fa";

import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & {
  link: string;
  githubLink: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <motion.div
        className="group mb-3 sm:mb-8 last:mb-0"
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <section className="bg-white max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[16rem]">
            <h3 className="text-2xl font-semibold text-gray-950">{title}</h3>

            <p className="mt-2 leading-relaxed text-gray-700">
              {description}
            </p>

            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={`${title} project image`}
            quality={95}
            onClick={toggleModal}
            className="cursor-pointer absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </motion.div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-slate-900/25 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={toggleModal}
        >
          <motion.div
            className="bg-[#f3f4f6] rounded-2xl w-[21rem] overflow-hidden shadow-2xl border border-white/70"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">
                    Project
                  </p>

                  <h2 className="text-[17px] font-semibold text-gray-950">
                    {title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={toggleModal}
                  className="flex-shrink-0 w-[30px] h-[30px] rounded-full border border-black/10 bg-white/80 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-white transition"
                >
                  <span className="text-sm leading-none">✕</span>
                </button>
              </div>

              <p className="text-[13px] text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="border-t border-black/[0.06] px-5 py-4 flex flex-col gap-2">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-[0.6rem] rounded-lg border border-black/10 bg-white/80 hover:bg-white transition [&:hover_span:last-child]:text-gray-500"
                >
                  <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FaEye className="text-[13px] text-gray-600" />
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-gray-800">
                      View demo
                    </p>

                    <p className="text-[11px] text-gray-400 truncate">
                      {link.replace("https://", "")}
                    </p>
                  </div>

                  <span className="text-gray-300 transition text-xs">↗</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 px-3 py-[0.6rem] rounded-lg border border-black/[0.06] bg-white/60 opacity-60 cursor-not-allowed">
                  <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FaEye className="text-[13px] text-gray-400" />
                  </span>

                  <p className="text-[13px] text-gray-400">
                    No demo available
                  </p>
                </div>
              )}

              {githubLink ? (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-[0.6rem] rounded-lg border border-black/10 bg-white/80 hover:bg-white transition [&:hover_span:last-child]:text-gray-500"
                >
                  <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FaGithub className="text-[13px] text-gray-600" />
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-gray-800">
                      View on GitHub
                    </p>

                    <p className="text-[11px] text-gray-400 truncate">
                      {githubLink.replace("https://github.com/", "")}
                    </p>
                  </div>

                  <span className="text-gray-300 transition text-xs">↗</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 px-3 py-[0.6rem] rounded-lg border border-black/[0.06] bg-white/60 opacity-60 cursor-not-allowed">
                  <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FaGithub className="text-[13px] text-gray-400" />
                  </span>

                  <p className="text-[13px] text-gray-400">
                    Private repository
                  </p>
                </div>
              )}
            </div>

            <div className="px-5 py-3 border-t border-black/[0.06] flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/80 text-gray-500 border border-black/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </React.Fragment>
  );
}