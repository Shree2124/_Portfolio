import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "Learnify",
    img: "/prj/ScrollHack.png",
    description:
      "An innovative solution developed during a hackathon, utilizing modern web technologies to address real-world challenges efficiently and creatively.",
    githubLink: "https://github.com/Shree2124/ScrollHack",
    liveDemo: "https://scroll-hack-rust.vercel.app/",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind css",
      "MUI",
    ],
  },
  {
    title: "TuneTube",
    img: "/prj/playtube.png",
    description:
      "A feature-rich YouTube clone built using the MERN stack, enabling video upload, playback, and user interaction. It replicates the core functionalities of YouTube, providing a seamless video streaming experience with a custom-built backend to handle media storage and retrieval.",
    githubLink: "https://github.com/Shree2124/Youtube-Clone",
    liveDemo: "https://youtube-clone-ca89.vercel.app/",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Blogify",
    img: "/prj/blog.png",
    description:
      "A dynamic blog platform built with React for the frontend and Appwrite as the backend service. It allows users to create, edit, and delete blog posts with a user-friendly interface, making content management seamless. The project also includes basic user authentication and data storage capabilities.",
    githubLink: "https://github.com/Shree2124/Blogify",
    liveDemo: "https://blogify-seven-omega.vercel.app",
    techStack: ["React", "Appwrite", "MUI"],
  },
];

export function CardHoverEffectDemo() {
  return (
    <div className="h-full mt-3">
      <HoverEffect items={projects} />
    </div>
  );
}
