import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Parascolaire",
    hash: "#parascolaire",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  // {
  //   title: "Game Developer intern",
  //   location: "Techpal. Casablanca, Morocco",
  //   description:
  //     " I developed an educational game using Unity to train employees on safety rules, personal protective equipment, and emergency procedures. I designing scenes, game levels and interactive mini-games en 2D and 3D.",
  //   icon: React.createElement('img', { src: 'https://i.ibb.co/YtXY3WT/output-onlinepngtools-6-modified.pngg', alt: 'Techpal' }),
  //   date: "Jul 2024 – Sep 2024",
  // },
  {
    title: "Web Development internship",
    location: "Major Media. Agadir, Morocco",
    description:
      "Create a dashboard for administration and secure customer feedback management applications.",
    icon: React.createElement('img', { src: 'https://i.ibb.co/NpTp8q3/images-modified.png', alt: 'MajorMedia' }),
    date: "Mar 2024 – Jun 2024",
  },
  {
    title: "Graphic designer",
    location: "Agence Fonty Media. Agadir, Morocco",
    description:
      "Responsible for creating photo retouching designs and layouts, including logos, posters, and social media graphics. My stack includes Adobe Illustrator, Adobe Photoshop, and Canva.",
      icon: React.createElement('img', { src: 'https://i.ibb.co/k5Gwn6z/output-onlinepngtools-1-modified.png', alt: 'Fonty Media' }),
      date: "Oct 2023 – Dec 2023",
  },
  {
    title: "Web Development internship",
    location: "ANCFCC. Rabat, Morocco",
    description:
      "I designed and developed a web application for recruitment request management, enabling users to submit recruitment requests through the platform. My stack includes Angular, ASP.NET, and MySQL Server.",
      icon: React.createElement('img', { src: 'https://i.ibb.co/MfPZ9Cq/output-onlinepngtools-5-modified.png', alt: 'ANCFCC Rabat' }),
      date: "Jul 2023 – Sep 2023",
  },

] as const;

export const educationData = [

  {
    title: "Software Engineer",
    location: "National School of Applied Sciences. Agadir, Morocco",
    description:
    "Formation approfondie en informatique incluant l'analyse et la conception de bases de données, la programmation orientée objet, les langages de programmation, les réseaux informatiques, la programmation web, l'architecture JEE et DotNet, la communication technique, l'administration des bases de données, la technologie XML, le développement mobile, UML2, la sécurité des réseaux, l'intelligence artificielle et le cloud computing.",
    icon: React.createElement('img', { src: 'https://i.ibb.co/d4ZVPKK/ensa-modified.png', alt: 'ensa agadir' }),
    date: "Oct 2022 - Jun 2025",
  },
  {
    title: "Preparatory cycle",
    location: "National School of Applied Sciences. Agadir, Morocco",
    description:
    "I have acquired foundational knowledge in Mathematics, Physics, Chemistry, C programming, computer architecture, and IT tools. Additionally, I have studied language studies, computer tools, technology, humanities, and business management.",
    icon: React.createElement('img', { src: 'https://i.ibb.co/d4ZVPKK/ensa-modified.png', alt: 'ensa agadir' }),
    date: "Oct 2020 – Jun 2022",
  },
  {
    title: "Baccalaureate, Physical Sciences",
    location: "Mohammed V High School. Guelmim, Morocco",
    description:
    "",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2018 – Jun 2020",
  },
  
] as const;

export const parascolaireData = [
  {
    title: "Treasurer",
    location: "APPS Club, ENSA. Agadir, Morocco",
    description:
      "I Managed financial operations and fiscal responsibility, contributing to the club's financial health.",
      icon: React.createElement('img', { src: 'https://i.ibb.co/7p8wpSf/output-onlinepngtools-modified.png', alt: 'Major Media' }),
      date: "Oct 2023 – Mar 2024",
  },
  {
    title: "Graphic designer & Social Media Manager",
    location: "Social Club ENSA. Agadir, Morocco",
    description:
      "Managed social media accounts, created content, designed promotional materials and event posters using Adobe Photoshop and Adobe Illustrator, and documented social activities through photography",
      icon: React.createElement('img', { src: 'https://i.ibb.co/sgpvsYz/output-onlinepngtools-4-modified.png', alt: 'Social Club' }),
      date: "Oct 2022 – Dec 2023",
  },
  {
    title: "Graphic designer & Social Media Manager",
    location: "Theater Club ENSA. Agadir, Morocco",
    description:
      "I Managed social media accounts, created content, designed promotional materials and posters for events, and photographed social activities.",
      icon: React.createElement('img', { src: 'https://i.ibb.co/tM0YNyh/output-onlinepngtools-2-modified.png', alt: 'Theater Club' }),
      date: "Oct 2021 – Dec 2023",
  },

] as const;


 


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "ASP.NET",
  "Java",
  "Spring",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Git",
  "Redux",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Unity",
  "Adobe Photoshop",
  "Adobe Illustrator",
] as const;
