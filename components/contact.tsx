"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SubmitButton from "./submit-button";
import { sendEmail } from "@/action/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 ">
        // You can shoot me directly at{" "}
        <a className="underline" href="mailto:anzel.acharya307@outlook.com">
          anzel.acharya307@outlook.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          placeholder="Your Email...."
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack transition-all"
          type="email"
          required
          maxLength={50}
        />
        <textarea
          placeholder="Any Message..."
          name="message"
          required
          maxLength={1000}
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
