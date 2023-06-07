"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi I'm Naveen Sharma",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
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
            <div>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div>
                    <button className="hero_button">About</button>
                    <button className="hero_button">Experience</button>
                    <button className="hero_button">Skills</button>
                    <button className="hero_button">Projects</button>
                </div>
            </div>
        </div>
    );
}
