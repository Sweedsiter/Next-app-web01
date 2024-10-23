"use client";

import Image from "next/image";
import Link from "next/link";
import { Data } from "@/public/Embroidery/Embroider";
import Transition from "@/components/conteners/Transition";

export default function Embroidery() {
  return (
    <Transition>
      <span className="p-3 text-xl">
        สำหรับ Embroidery Wilcom มีมากกว่าที่ลงไว้
        เนื่องจากว่าลงไว้เพื่อสือเท่านั้น
      </span>
      <div className="w-full h-auto flex desktop:flex-row desktop:justify-start flex-wrap justify-center items-center desktop:px-3">
        {Data.map((e, index) => (
          <Link
            href={e.src}
            target="_blank"
            className="m-2 border desktop:w-52 w-full p-1 duration-300 hover:bg-slate-900 hover:text-white flex flex-col items-center"
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
    </Transition>
  );
}
