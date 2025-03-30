"use client";
import { AboutSection } from "@/components/AnimatedTestimonials/AnimatedTestimonials";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeams/BackgroundBeams";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect/CardHoverEffect";
// import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollision/BackgroundBeamsWithCollision";
import Title from "@/components/Title/Title";
import Head from "next/head";
import { EvervaultCardDemo } from "@/components/EvervaultCardDemo/EvervaultCardDemo";

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
      <div className="relative w-full h-full">
        {/* Navbar */}
        <Navbar />

        {/* Background Section */}
        <div
          id="home"
          className="z-0 relative shadow-lg w-full h-screen overflow-hidden"
        >
          <BackgroundBeamsDemo />
        </div>


        <div className="z-10 relative h-full">
          <div id="about" className="bg-[#151515] shadow-xl">
            {isClient && (
              <motion.div
                className="relative mx-auto px-4 max-w-screen-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >

                <AboutSection />
              </motion.div>
            )}
          </div>

          <div id="skills" className="bg-[#181818] shadow-xl pb-10">
            <div className="mx-auto px-4 max-w-screen-xl">
              <Skills />
            </div>
          </div>

          <div id="projects" className="bg-[#111111] shadow-xl text-white">
            <div className="mx-auto px-4 max-w-screen-xl">
              <div className="pt-20 pl-20">
                <Title text={"My Projects"} />
              </div>
              <CardHoverEffectDemo />
            </div>
          </div>
          <div id="contact" className="bg-[#060606] shadow-xl pb-10 w-full text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
              <div className="px-4 md:px-20 pt-16 md:pt-20 md:text-left text-center">
                <Title text={"Contact Me"} />
              </div>
              <div className="flex justify-center p-2 sm:p-5">
                <EvervaultCardDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
