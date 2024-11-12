import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AboutSection() {
  const aboutContent = [
    {
      title: "A Passion for Innovation",
      description:
        "I'm a technology enthusiast driven by a desire to innovate and create impactful digital experiences. From web development to software design, my focus is on building intuitive, high-performing solutions that make a difference.",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Technical Expertise",
      description:
        "With a strong foundation in the MERN stack, JavaScript, and Python, I’m adept at transforming complex challenges into streamlined, efficient applications. My expertise spans full-stack development, from crafting responsive front-end interfaces to architecting robust back-end systems.",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Focused on User Experience",
      description:
        "Creating seamless, user-friendly interfaces is at the core of my work. I believe technology should enhance user experiences, making everyday tasks easier and more enjoyable. This philosophy drives me to design applications with empathy, usability, and elegance in mind.",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Problem Solver",
      description:
        "My journey in tech has been fueled by a love for problem-solving. I enjoy tackling challenges and finding creative, efficient solutions, whether through code optimization, system design, or strategic thinking.",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lifelong Learner",
      description:
        "Technology evolves rapidly, and I’m dedicated to continuous learning and growth. Staying updated on the latest trends and skills keeps me adaptable and ensures that I can bring fresh, innovative ideas to every project.",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={aboutContent} />;
}
