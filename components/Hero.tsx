import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Profile from "../images/profile.png";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name is Venkata Rami Reddy",
      "I am an Undergraduate Student",
      "I am a Full Stack Developer",
      "I am a Competitive Programmer",
      "I am a Web3 Enthusiast",
      "I am a Blockchain Follower",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={Profile}
        alt="profile"
        width={150}
        height={150}
        className="rounded-full object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          FullStack Developer
        </h2>
        <h1 className="text-sm lg:text-sm font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <br />
          <a href="/venkat_resume.pdf" download>
            <button className="heroButton mt-5">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}
