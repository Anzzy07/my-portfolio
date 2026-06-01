import Khojkhaz from "@/public/3.png";
import Stocks from "@/public/2.png";
import MovieRating from "@/public/movierating.png";
import Kommuna from "@/public/kommuna.png";
import { StaticImageData } from "next/image";

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  link: string;
  githubLink: string;
  isCompany: boolean;
};

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    company: "FinFox",
    title: "React Native Developer (Junior)",
    description:
      "Collaborated with cross-functional teams to deliver a fintech app for Android and iOS. Optimized performance and security for seamless bank data integration, built data visualizations, and tested AI chat features for spending insights and savings tools.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Redux",
      "Tamagui",
      "AI",
    ],
    date: "June 2025 – September 2025",
    type: "work",
  },
  {
    company: "SRIYOG",
    title: "React Native Developer (Junior)",
    description:
      "Worked as a solo developer converting a Flutter app to React Native (TypeScript). Designed data models using Airtable as cloud backend, built responsive cross-platform apps, and successfully deployed to the Play Store.",
    tags: ["React Native", "Expo", "TypeScript", "Airtable"],
    date: "December 2024 – May 2025",
    type: "work",
  },
  {
    company: "Arcadia Creation Pvt. Ltd",
    title: "Frontend Developer (Intern)",
    description:
      "Translated user needs into functional frontend designs using React and Tailwind CSS. Worked with teams to build responsive and interactive web applications optimized for both desktop and mobile.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    date: "December 2023 – March 2024",
    type: "work",
  },
] as const;

export const projectsData: Project[] = [
    {
    title: "Community App",
    description:
      "A community-driven social media app with real-time group chat, notifications, member roles, group discovery, and full authentication using Clerk.",
    tags: ["React Native (Expo)", "TypeScript", "Supabase", "Clerk", "React Query"],
    imageUrl: Kommuna,
    link: "https://youtu.be/NJcPBAtRQJo",
    githubLink: "https://github.com/Anzzy07/CommunityApp",
    isCompany: false,
  },
  {
    title: "Khojkhaz - Real Estate App",
    description:
      "Full-stack Final Year Project: A Real Estate App with CRUD functionality, map-based property listing, search, OAuth authentication, and a Go backend.",
    tags: [
      "React Native (Expo)",
      "TypeScript",
      "Golang",
      "AWS S3",
      "PostgreSQL",
      "OAuth",
    ],
    imageUrl: Khojkhaz,
    link: "https://github.com/Anzzy07/khojkhaz-server",
    githubLink: "https://github.com/Anzzy07/KhojkhazApp",
    isCompany: false,
  },
  {
    title: "Stocks App",
    description:
      "A React Native app showcasing Fortune 500 company stocks with graphs, search functionality, and the ability to like or remove favourite stocks.",
    tags: [
      "React Native",
      "React Native Paper",
      "React Animation",
      "Context API",
    ],
    imageUrl: Stocks,
    link: "https://github.com/Anzzy07/stocks-app",
    githubLink: "https://github.com/Anzzy07/stocks-app",
    isCompany: false,
  },
  {
    title: "Movie-Rating",
    description:
      "A web app to browse movies and TV shows with full details, guest login, and the ability to rate them.",
    tags: ["React", "TypeScript", "Context API", "Semantic UI", "React Query"],
    imageUrl: MovieRating,
    link: "https://ratingmovies10.netlify.app/",
    githubLink: "https://github.com/Anzzy07/rating-movie",
    isCompany: false,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Golang",
  "Tailwind CSS",
  "Tamagui",
  "Redux & Toolkit",
  "Zustand",
  "Jotai",
  "React Query",
  "Context API",
  "Firebase",
  "Supabase",
  "AWS (S3)",
  "PostgreSQL",
  "MongoDB",
  "Airtable",
  "Git",
  "Framer Motion",
] as const;
