import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AboutSection() {
  const aboutContent = [
    {
      title: "A Passion for Innovation",
      description:
        "I'm a technology enthusiast driven by a desire to innovate and create impactful digital experiences. From web development to software design, my focus is on building intuitive, high-performing solutions that make a difference.",
      // src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src:
        "https://u2vjdxa2quhx-u4030.pressidiumcdn.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/digital-innovation-light-bulb-moment.png.webp",
    },
    {
      title: "Technical Expertise",
      description:
        "With a strong foundation in the MERN stack, JavaScript, and Python, I’m adept at transforming complex challenges into streamlined, efficient applications. My expertise spans full-stack development, from crafting responsive front-end interfaces to architecting robust back-end systems.",
      // src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src:
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=612x612&w=0&k=20&c=2GLUy6eqCSr0NFRO8CHm8_PUMy9Qc8ryqcsRoe0DEYM=",
    },
    {
      title: "Focused on User Experience",
      description:
        "Creating seamless, user-friendly interfaces is at the core of my work. I believe technology should enhance user experiences, making everyday tasks easier and more enjoyable. This philosophy drives me to design applications with empathy, usability, and elegance in mind.",
      // src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src:
        "https://clevertap.com/wp-content/uploads/2019/01/user-experience-optimization-Blog_header1.png",
    },
    {
      title: "Problem Solver",
      description:
        "My journey in tech has been fueled by a love for problem-solving. I enjoy tackling challenges and finding creative, efficient solutions, whether through code optimization, system design, or strategic thinking.",
      src:
        "https://i.pinimg.com/736x/0f/ce/50/0fce507b17ff2ec381572a7a6a75fd8d.jpg",
    },
    {
      title: "Lifelong Learner",
      description:
        "Technology evolves rapidly, and I’m dedicated to continuous learning and growth. Staying updated on the latest trends and skills keeps me adaptable and ensures that I can bring fresh, innovative ideas to every project.",
      // src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSB5WcuL2mWtZeGZsV3HdM7G5xADoD1A-2PyVNgqyPuz7WWDgOUAHhabq-Xd7GmRiXVE&usqp=CAU",
    },
  ];
  return (
    <div className="text-white h-full overflow-hidden">
      <AnimatedTestimonials testimonials={aboutContent} />
    </div>
  );
}
