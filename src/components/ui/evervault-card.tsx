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
    }

    // setTimeout(() => {
    //   setIsSuccess(true);
    //   setModalMessage("Message submitted successfully!");
    //   setModalOpen(true);

    //   setName("");
    //   setPhone("");
    //   setMessage("");
    // }, 1000);
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
        "p-0.5 bg-black aspect-square  flex items-center justify-center w-full h-full relative",
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
                component="form"
                onSubmit={handleSubmit}
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
                      fontSize: "1.2rem",
                    }}
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
                      fontSize: "1.2rem",
                    }}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    style={{
                      fontSize: "1rem",
                      width: "100%",
                      padding: "4px",
                      borderRadius: "2px",
                      border: "1px solid white",
                      color: "black",
                      outline: "none",
                      resize: "none",
                    }}
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
                  {loading ? <CircularProgress color="secondary" /> : "Send"}
                </Button>
              </Box>
              <div className="mb-5 flex align-center justify-center gap-3 px-5 text-center">
                <a
                  href="mailto:shreealasande@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shree-alasande-933934272/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/Shree2124"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
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
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: isSuccess ? "green" : "red",
            }}
          >
            {isSuccess ? "Success" : "Error"}
          </Typography>
          <Typography>{modalMessage}</Typography>
          <Button
            className="bg-green-500 text-white p-3 mt-3"
            onClick={() => {
              setModalOpen(false);
              setModalMessage("");
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
