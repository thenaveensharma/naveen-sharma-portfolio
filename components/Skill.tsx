import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl text-black font-bold opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
