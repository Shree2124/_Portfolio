import React from "react";

interface titleProps {
  text: string;
}

const Title = ({ text }: titleProps) => {
  return (
    <div className="relative mx-auto lg:text-left text-white font-sans pb-20 text-6xl font-extrabold">
      <h1 className="mx-auto relative z-10 bg-clip-text text-transparent text-white font-sans font-bold">
        {text}
      </h1>
    </div>
  );
};

export default Title;
