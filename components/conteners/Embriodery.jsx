"use client";

import Image from "next/image";
import Link from "next/link";
import { Data } from "@/public/Embroidery/Embroider";

export default function Embroidery() {
  return (
    <div className="w-full h-auto flex desktop:flex-row flex-wrap justify-center desktop:px-3">
      {Data.map((e) => (
        <Link href={e.src} target="_blank" className="p-2">
          <Image
            src={e.src}
            width={300}
            height={300}
            alt="Picture of the author"
            className="desktop:w-60 w-full"
          />
        </Link>
      ))}
    </div>
  );
}
