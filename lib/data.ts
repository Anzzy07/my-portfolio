import Khojkhaz from "@/public/3.png";
import Ecommerce from "@/public/1.png";
import Stocks from "@/public/2.png";
import MovieRating from "@/public/movierating.png";
import { link } from "fs";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Khojkhaz Real-Estate App",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Khojkhaz,
    link: "https://github.com/Anzzy07/khojkhaz-server",
    githubLink: "https://github.com/Anzzy07/KhojkhazApp",
  },
  {
    title: "Stocks App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Stocks,
    githubLink: "https://github.com/Anzzy07/stocks-app",
  },
  {
    title: "Movie-Rating",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: MovieRating,
    link: "https://ratingmovies10.netlify.app/",
    githubLink: "https://github.com/Anzzy07/rating-movie",
  },
  {
    title: "Hanger-Clothing",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Ecommerce,
    link: "https://hanger-clo.netlify.app/",
    githubLink: "https://github.com/Anzzy07/hanger-clo",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React-Native",
  "Next.js",
  "Node.js(Basic)",
  "Golang(Basic)",
  "Git",
  "Tailwind",
  "MongoDB",
  "AWS(S3)",
  "PostgreSQL",
  "Framer Motion",
] as const;
