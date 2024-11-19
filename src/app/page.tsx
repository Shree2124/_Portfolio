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

        
          <div className="relative z-10 h-full">
            <div id="about" className=" shadow-xl bg-neutral-950">
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

            <div id="skills" className="shadow-xl bg-neutral-950 pb-10">
              <div className="mx-auto max-w-screen-xl px-4">
                <Skills />
              </div>
            </div>

            <div id="projects" className="text-white bg-neutral-950 shadow-xl">
              <div className="mx-auto max-w-screen-xl px-4">
                <div className="pt-20 pl-16">
                  <Title text={"My Projects"} />
                </div>
                <CardHoverEffectDemo />
              </div>
            </div>
            <div id="contact" className="text-white shadow-xl max-h-full w-full bg-neutral-950 h-full pb-6">
              <div className="px-4">
                <div className="pt-20 pl-16">
                  <Title text={"Contact Me"} />
                </div>
                <EvervaultCardDemo />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
