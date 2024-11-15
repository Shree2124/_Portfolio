"use client";
import React from "react";
import { textVarient } from "@/utils/motion";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import Title from "../Title/Title";

const Skills = () => {
  return (
    <div className="h-full">
      <div className="pt-20 pl-16">
      <Title text={"Skills"}/>
      </div>
      <motion.p
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="overflow-hidden relative text-white text-center text-lg p-10 md:px-[25%]"
      >
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </motion.p>
      <motion.div
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 sm:p-2 items-center justify-center flex-wrap mt-10"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="flex flex-col justify-center items-center bg-purple-800/5 border-[1px] border-purple-800 w-40 h-40 p-5 rounded-xl hover:bg-purple-500/30 transition duration-1000 ease-in-out">
              <img
                src={skill.image}
                className="w-16 h-16 object-cover"
                alt={`${skill.name}`}
              />
            </div>
            <h2 className="text-purple-500 font-bold text-xl">{skill.name}</h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
