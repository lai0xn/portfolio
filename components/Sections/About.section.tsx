import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">I'm Aymen</p>
        <p className="mt-1 text-lg text-gray-300">
          Backend and systems Programmer
        </p>
        <p className="mt-4 text-gray-400">
          Building Web apps, cli tools, system utilities 
        
        </p>

        </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.webp"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
