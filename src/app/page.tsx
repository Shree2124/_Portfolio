"use client"
import { AboutSection } from "@/components/AnimatedTestimonials/AnimatedTestimonials";
import { AuroraBackgroundDemo } from "@/components/AuroraBackground/AuroraBackground";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      <div className="h-full max-h-screen">
        <AuroraBackgroundDemo />
      </div>
      {isClient && (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AboutSection/>
          </motion.div>
        </AnimatePresence>
      )}

    </div>
  );
}
