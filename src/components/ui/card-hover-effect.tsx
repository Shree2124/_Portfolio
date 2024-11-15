import { cn } from "@/lib/utils";
import { Box, CardMedia, Chip, Tooltip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    img: string;
    description: string;
    githubLink: string;
    liveDemo: string;
    techStack: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            // href={item?.githubLink}
            key={crypto.randomUUID()}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardMedia
                component="img"
                alt={item.title}
                height="140"
                image={item.img}
                sx={{
                  paddingTop: 2
                }}
              />
              <CardDescription>{item.description}</CardDescription>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  marginBottom: 2,
                  marginTop: 3,
                }}
              >
                {item?.techStack?.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    sx={{
                      backgroundColor: "#1A1A2E",
                      color: "#FFF",
                      borderColor: "#00FFFF",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                    }}
                    size="small"
                  />
                ))}
              </Box>
              <Box
                sx={{
                  position: "relative",
                  bottom: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 3,
                  paddingX: 3,
                }}
              >
                <Link href={item.liveDemo}>
                <Tooltip title="Live demo">
                  <GrDeploy />
                </Tooltip>
                </Link>
                <Link href={item.githubLink}>
                <Tooltip title="Source code">
                  <FaCode />
                </Tooltip>
                </Link>
              </Box>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-30">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
