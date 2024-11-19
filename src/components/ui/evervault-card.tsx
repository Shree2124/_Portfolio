"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Box, Button, TextField } from "@mui/material";

export const EvervaultCard = ({
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    if (!throttleTimeout.current) {
      throttleTimeout.current = setTimeout(() => {
        const str = generateRandomString(1500);
        setRandomString(str);
        throttleTimeout.current = null;
      }, 100);
    }
  }

  return (
    <div
      className={cn(
        "p-0.5  bg-black aspect-square  flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex h-full items-center justify-center w-full">
          <div className="relative h-full w-full  rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full  blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                }}
              >
                <label>
                  <span
                    style={{
                      color: "white",
                      marginBottom: "2px",
                      display: "block",
                      fontSize: "1.2rem",
                    }}
                  >
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "2px",
                      border: "1px solid white",
                      backgroundColor: "transparent",
                      color: "white",
                      outline: "none",
                      fontSize: "1.2rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "white")}
                    onBlur={(e) => (e.target.style.borderColor = "white")}
                  />
                </label>

                <label>
                  <span
                    style={{
                      color: "white",
                      marginBottom: "2px",
                      display: "block",
                      fontSize: "1.2rem",
                    }}
                  >
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "2px",
                      border: "1px solid white",
                      backgroundColor: "transparent",
                      color: "white",
                      outline: "none",
                      fontSize: "1.2rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "white")}
                    onBlur={(e) => (e.target.style.borderColor = "white")}
                  />
                </label>

                <label>
                  <span
                    style={{
                      color: "white",
                      marginBottom: "2px",
                      display: "block",
                      fontSize: "1.2rem",
                    }}
                  >
                    Message
                  </span>
                  <textarea
                    required
                    rows={4}
                    style={{
                      fontSize: "1rem",
                      width: "100%",
                      padding: "4px",
                      borderRadius: "2px",
                      border: "1px solid white",
                      backgroundColor: "transparent",
                      color: "white",
                      outline: "none",
                      resize: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "white")}
                    onBlur={(e) => (e.target.style.borderColor = "white")}
                  />
                </label>

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    width: "100%",
                    padding: "10px 16px",
                    fontWeight: "bold",
                    textTransform: "none",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
