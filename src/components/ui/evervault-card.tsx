"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Box,
  Button,
  Modal,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const EvervaultCard = ({
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [randomString, setRandomString] = useState("");
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      setIsSuccess(false);
      setModalMessage("Please fill out all fields.");
      setModalOpen(true);
      return;
    }

    try {
      setLoading(true);
      console.log(name, phone, message);

      await axios
        .post("https://portfolio-kappa-lovat-61.vercel.app/api/v1/mail", {
          // .post("http:localhost:8000/api/v1/mail",{
          email: "majorprojecttesting97@gmail.com",
          name,
          number: phone,
          msg: message,
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((res: AxiosResponse) => {
          setIsSuccess(true);
          setModalMessage("Message submitted successfully!");
          setModalOpen(true);
          setLoading(false);
          setName("");
          setPhone("");
          setMessage("");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
      setModalMessage("An error occurred. Please try again.");
      setModalOpen(true);
      setLoading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
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
        "p-0.5 bg-black aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card relative flex justify-center items-center bg-transparent rounded-3xl w-full h-full overflow-hidden"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="z-10 relative flex justify-center items-center w-full h-full">
          <div className="relative flex justify-center items-center rounded-full w-full h-full font-bold text-white text-4xl">
            <div className="absolute blur-sm rounded-full w-full h-full" />
            <span className="z-20 w-full text-black dark:text-white">
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: { xs: "12px", sm: "16px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "8px", sm: "12px" },
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                }}
                component="form"
                onSubmit={handleSubmit}
              >
                <label>
                  <Typography
                    sx={{
                      color: "white",
                      marginBottom: "2px",
                      display: "block",
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                    }}
                  >
                    Name
                  </Typography>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "2px",
                      border: "1px solid white",
                      color: "black",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                    className="text-sm sm:text-base md:text-lg"
                  />
                </label>

                <label>
                  <Typography
                    sx={{
                      color: "white",
                      marginBottom: "2px",
                      display: "block",
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                    }}
                  >
                    Phone Number
                  </Typography>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "2px",
                      border: "1px solid white",
                      color: "black",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                    className="text-sm sm:text-base md:text-lg"
                  />
                </label>

                <label>
                  <Typography
                    sx={{
                      color: "white",
                      marginBottom: "2px",
                      display: "block",
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                    }}
                  >
                    Message
                  </Typography>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "2px",
                      border: "1px solid white",
                      color: "black",
                      outline: "none",
                      resize: "none",
                      fontSize: "0.9rem",
                    }}
                    className="text-sm sm:text-base"
                  />
                </label>

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    width: "100%",
                    padding: { xs: "8px", sm: "10px 16px" },
                    fontWeight: "bold",
                    textTransform: "none",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  {loading ? <CircularProgress size={20} color="inherit" /> : "Send"}
                </Button>
              </Box>
              <div className="flex justify-center items-center gap-2 sm:gap-3 mt-2 mb-4 sm:mb-5 px-2 sm:px-5 text-center">
                <a
                  href="mailto:shreealasande@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaEnvelope size={24} className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shree-alasande-933934272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaLinkedin size={24} className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
                <a
                  href="https://github.com/Shree2124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaGithub size={24} className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 280, sm: 300 },
            maxWidth: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: { xs: 3, sm: 4 },
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: isSuccess ? "green" : "red",
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            {isSuccess ? "Success" : "Error"}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            {modalMessage}
          </Typography>
          <Button
            className="bg-green-500 mt-3 p-2 sm:p-3 text-white"
            onClick={() => {
              setModalOpen(false);
              setModalMessage("");
            }}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Ok!
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CardPattern({ mouseX, mouseY, randomString }: any) {
  // eslint-disable-next-line prefer-const
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  // eslint-disable-next-line prefer-const
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 group-hover/card:opacity-50 rounded-2xl [mask-image:linear-gradient(white,transparent)]"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl rounded-2xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 rounded-2xl mix-blend-overlay"
        style={style}
      >
        <p className="absolute inset-x-0 h-full font-mono font-bold text-white text-xs break-words whitespace-pre-wrap transition duration-500">
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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