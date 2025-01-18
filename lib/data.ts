import Khojkhaz from "@/public/3.png";
import Ecommerce from "@/public/1.png";
import Stocks from "@/public/2.png";
import MovieRating from "@/public/movierating.png";

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
  },
  {
    title: "Stocks App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Stocks,
  },
  {
    title: "Hanger-Clothing",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Ecommerce,
  },
  {
    title: "Movie-Rating",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: MovieRating,
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
