import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://github.com/lawliet-cpp/ecommerce_api" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[white] to-[white] p-1 text-white duration-100 hover:scale-105"
            target=""
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Ecommerce-api</p>
              <p>ecommerce website api</p>

            </div>
          </a>
        </Link>

        <Link href="https://github.com/lai0xn/nya-backend" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[white] via-[white] to-[white] p-1 text-white duration-100 hover:scale-105"
            target="https://github.com/lai0xn/nya-backend"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Nyanime</p>
              <p>backend of the nyanime app</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
