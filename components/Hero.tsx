"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi I'm Naveen Kumar",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 100,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/images/Logo.jpg"
        alt=""
        width={200}
        height={200}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="mt-5">
          <Link href={"#about"}>
            <button className="hero_button">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="hero_button">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="hero_button">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="hero_button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
