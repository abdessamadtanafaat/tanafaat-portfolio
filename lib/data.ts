import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ELearning from "@/public/ELearning.jpg";
import NotifyMessagerie from "@/public/NotifyMessagerie.png";
import EduPresence from "@/public/EduPresenceApp.png";
import pharmacyPro from "@/public/pharmacyPro.jpg";
import FleetManagement from "@/public/fleetManagement.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Parascolaire",
    hash: "#parascolaire",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Internship",
    location: "Techpal. Casablanca, Morocco",
    description:
    "I developed an educational game using Unity to train employees on safety rules, personal protective equipment, and emergency procedures, designing scenes, game levels, and interactive mini-games in both 2D and 3D. The project included writing technical specifications, developing a quiz module with various formats, and creating a character selection module along with personal protective equipment options. The technical environment utilized C# and the Unity Engine.",
    icon: React.createElement('img', { src: 'https://i.ibb.co/YtXY3WT/output-onlinepngtools-6-modified.pngg', alt: 'Techpal' }),
    date: "Jul 2024 – Sep 2024",
  },
  {
    title: "Internship",
    location: "Major Media. Agadir, Morocco",
    description: 
    "The project focuses on creating a back-office for customer satisfaction survey applications, utilizing Agile methodology (SCRUM) for project management. It includes writing functional and technical specifications, designing the application with UML diagrams, developing modules for role, privilege, and account management, and analyzing user statistics. Additionally, it involves managing owners and their businesses, deploying the application on Docker, and operates within a technical environment that includes React v17, Java, Spring Boot, Spring Security, MySQL, HTML5, Tailwind CSS, JavaScript, Postman, Trello, Astah UML, and Docker.",
    icon: React.createElement('img', { src: 'https://i.ibb.co/NpTp8q3/images-modified.png', alt: 'MajorMedia' }),
    date: "Feb 2024 – Jul 2024",
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
    title: "Internship",
    location: "ANCFCC. Rabat, Morocco",
    description:
      "I designed and developed a web application for managing recruitment requests. This project included writing functional and technical specifications, modeling and designing the application with UML, implementing an authentication and authorization system, and developing modules for managing applications and providing overall statistics on received applications. The technical environment comprised .NET Core, Angular, C#, SQL Server, and Visual Studio.",
      icon: React.createElement('img', { src: 'https://i.ibb.co/MfPZ9Cq/output-onlinepngtools-5-modified.png', alt: 'ANCFCC Rabat' }),
      date: "Jul 2023 – Aug 2023",
  },

] as const;

export const educationData = [

  {
    title: "Software Engineer Student",
    location: "National School of Applied Sciences. Agadir, Morocco",
    description:
    "In-depth training in computer science, including database analysis and design, object-oriented programming, programming languages, computer networks, web programming, JEE and .NET architecture, technical communication, database administration, XML technology, mobile development, UML2, network security, artificial intelligence, and cloud computing.",
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
    title: "Notify-Messaging (In Progress)",
    description:
    "I worked on the development of a web application for a social network.",
    tags: [".NET Core", "C#", "React", "MongoDB", "Tailwind", "TypeScript","Swagger","Visual Studio Code","Postman"],
    imageUrl: NotifyMessagerie,
  },
  {
    title: "EduPresence",
    description:
    "Development of a mobile application for managing student attendance.",
    tags: ["Java", "Android Studio", "SQLite"],
    imageUrl: EduPresence,
  },
  {
    title: "FleetManager",
    description:
    "Backend implementation of a vehicle fleet management system.",
    tags: ["Java", "Spring Boot", "Spring Security", "MySQL","Swagger","RedisInsight","Postman","IntelliJ IDEA","Visual Studio Code"],
    imageUrl: FleetManagement,
  },
  {
    title: "E-LearningApp",
    description:
    "Creation of an e-learning platform that includes quizzes and certificates.",
    tags: ["Next.js", ".NET Core", "C#", "MySQL","TypeScript","Visual Studio Code","Swagger","Postman","Microsoft Visual Studio"],
    imageUrl: ELearning,
  },
  {
    title: "PharmacyPro",
    description:
    "Development of a web application for pharmacy management.",
    tags: ["Java", "HTML5", "CSS", "MySQL","PHPMyAdmin"],
    imageUrl: pharmacyPro,
  },

] as const;

export const skillsData = [
  "HTML 5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  ".NET Core",
  "Java",
  "C#",
  "VB.NET",
  "Spring",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Git",
  "Redux",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Unity Engine",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Android Studio",
  "SQLlite",
  "Oracle",
  "C", 
  "C++",
  "Microsoft Visual Studio",
  "Visual Studio Code",
  "Eclipse",
  "Docker",
  "IntelliJ",
  "JetBrains",

] as const;
