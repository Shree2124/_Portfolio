import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="relative flex flex-col items-center mx-auto border-black/[0.2] w-full">
      <Icon className="hidden md:block -top-3 -left-3 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="hidden md:block -top-3 -left-4 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="hidden md:block -bottom-3 -left-3 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="hidden md:block -bottom-3 -left-4 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="hidden md:block -top-3 -right-3 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="hidden md:block -top-3 -right-4 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="hidden md:block -right-3 -bottom-3 absolute w-6 h-6 text-black dark:text-white" />
      <Icon className="hidden md:block -right-4 -bottom-3 absolute w-6 h-6 text-black dark:text-white" />

      <div className="w-full max-w-md">
        <EvervaultCard />
      </div>
    </div>
  );
}