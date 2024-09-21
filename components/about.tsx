"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-1">
        I am a final-year software engineering student at the {" "}
        <span className="font-medium">National School of Applied Sciences of Agadir (ENSAA)</span>, I decided to pursue my
        passion for programming. I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        I love the
        feeling of finally figuring out a solution to a problem.
        I am also familiar with TypeScript and SQL. I am always eager to
        learn new technologies. Currently, I am seeking{" "}
        <span className="font-medium">new challenges</span> as a software
        developer.
      </p>

      <p>
        <span className="">Outside of coding</span>, I enjoy playing
        video games and watching movies. I make{" "}
        <span className="font-medium">design images</span> as a freelencer or a hobby. 
        I am actively learning new skills in Adobe Photoshop and Illustrator.</p>
    </motion.section>
  );
}
