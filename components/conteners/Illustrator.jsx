"use client";

import Image from "next/image";
import Link from "next/link";
import { Data } from "@/public/Illustrator/Illustrator";
import Transition from "@/components/conteners/Transition";

export default function Illustrator() {
  return (
    <Transition>
      <span className="p-3 text-xl">
        สำหรับ Ai illustrator มีมากกว่าที่ลงไว้
        เนื่องจากว่าลงไว้เพื่อสือเท่านั้น
      </span>
      <div className="w-full h-auto flex desktop:flex-row desktop:justify-start flex-wrap justify-center desktop:px-3">
        {Data.map((e, index) => (
          <Link
            href={e.src}
            target="_blank"
            className="m-2 border desktop:w-52 w-full p-1 duration-300 hover:bg-slate-900 hover:text-white"
            key={index}
          >
            <Image
              src={e.src}
              width={300}
              height={300}
              alt={e.name}
              className="pb-1 border"
            />
            <span className="p-3 ">{e.name}</span>
          </Link>
        ))}
      </div>
      <br/>
      <Link
        className="p-2 border mx-4 bg-slate-900 text-white h-fit"
        target="_blank"
        href="https://drive.google.com/drive/folders/1MSo02sP1k7TmH9rxKSvvQoUg4qLAh-hc?usp=drive_link"
      >
        More Design
      </Link>
    </Transition>
  );
}
