"use client";

import Image from "next/image";
import Link from "next/link";
import { Data } from "@/public/Embroidery/Embroider";
import Transition from "@/components/conteners/Transition";

export default function Embroidery() {
  return (
    <Transition>
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
    </Transition>
  );
}
