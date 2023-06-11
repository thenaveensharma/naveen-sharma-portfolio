import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="h-32 w-32 rounded-full md:h-[200px] md:w-[200px] object-cover object-center"
        src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO OF MY LIFE</h4>
        <p className="font-bold text-2xl mt-1">The Shadow Co.</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 rounded-full"
            src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-2 text-gray-300">
          Started Work... - Ended...{" "}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Summary PointsSummary Points Summary Points</li>
          <li>Summary PointsSummary Points Summary Points</li>
          <li>Summary PointsSummary Points Summary Points</li>
          <li>Summary PointsSummary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
