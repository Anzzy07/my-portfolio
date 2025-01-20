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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
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
      "I worked as a full-stack developer on my Final Year Project: a Real Estate App featuring CRUD functionality, search, maps, and a chat feature.",
    tags: [
      "React Native (Expo)",
      "TypeScript",
      "Golang",
      "AWS S3",
      "PostgreSQL",
    ],
    imageUrl: Khojkhaz,
    link: "https://github.com/Anzzy07/khojkhaz-server",
    githubLink: "https://github.com/Anzzy07/KhojkhazApp",
  },
  {
    title: "Stocks App",
    description:
      "A React Native app showcasing Fortune 500 company stocks, featuring graphs, search functionality, and options to like or remove favorite stocks.",
    tags: [
      "React Native",
      "React Native Paper",
      "React Animation",
      "Context API",
    ],
    imageUrl: Stocks,
    githubLink: "https://github.com/Anzzy07/stocks-app",
  },
  {
    title: "Movie-Rating",
    description:
      "A web app to browse movies and TV shows with full details, allowing guest login and the ability to rate them.",
    tags: ["React", "TypeScript", "Context API", "Sementic UI", "React Query"],
    imageUrl: MovieRating,
    link: "https://ratingmovies10.netlify.app/",
    githubLink: "https://github.com/Anzzy07/rating-movie",
  },
  {
    title: "Hanger-Clothing",
    description:
      "Developed a Ecommerce with user authentication, shopping cart functionality, and a checkout page.",
    tags: ["React", "SCSS & Styled-Component", "Context API", "Firebase"],
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
