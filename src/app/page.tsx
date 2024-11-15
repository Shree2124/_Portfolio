"use client";
import { AboutSection } from "@/components/AnimatedTestimonials/AnimatedTestimonials";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeams/BackgroundBeams";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect/CardHoverEffect";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollision/BackgroundBeamsWithCollision";
import Title from "@/components/Title/Title";
import Head from "next/head";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-full w-full">
        {/* Navbar */}
        <Navbar />

        {/* Background Section */}
        <div
          id="home"
          className="h-screen w-full overflow-hidden relative z-0 shadow-lg"
        >
          <BackgroundBeamsDemo />
        </div>

        {/* Wrapped About, Skills, and Projects in BackgroundBeamsWithCollision */}
        <BackgroundBeamsWithCollisionDemo>
          {/* Content Inside the Animated Beams */}
          <div className="relative z-10">
            {/* About Section */}
            <div id="about" className=" shadow-xl">
              {isClient && (
                <motion.div
                  className="relative mx-auto max-w-screen-xl px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AboutSection />
                </motion.div>
              )}
            </div>

            {/* Skills Section */}
            <div id="skills" className="shadow-xl pb-10">
              <div className="mx-auto max-w-screen-xl px-4">
                <Skills />
              </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="text-white shadow-xl">
              <div className="mx-auto max-w-screen-xl px-4">
                <div className="pt-20 pl-16">
                  <Title text={"My Projects"} />
                </div>
                <CardHoverEffectDemo />
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollisionDemo>
      </div>
    </>
  );
}
