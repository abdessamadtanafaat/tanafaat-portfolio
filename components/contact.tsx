"use client";

import React, { FormEvent, useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
//import { sendEmail } from "@/actions/sendEmail";
import emailjs from '@emailjs/browser'
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  
  const form = useRef<HTMLFormElement>(null);

  const serviceId = 'service_h1zed88';
  const templateId = 'template_tcdy4ud';
  const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const toastId = toast.loading('Waiting...');

      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          () => {
            toast.dismiss(toastId);
            toast.success('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            toast.dismiss(toastId);
            console.error('Email sending failed:', error);
            toast.error('Failed to send message. Please try again later.');
          },
        );
    }
  };
  
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
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me at{" "}
        <a className="underline" href="mailto:tanafaatabdessamad@gmail.com">
        tanafaatabdessamad@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form ref={form} onSubmit={sendEmail}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="user_email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
