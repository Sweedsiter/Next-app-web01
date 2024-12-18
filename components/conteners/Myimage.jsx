"use client";

import Image from "next/image";
import Link from "next/link";

export default function Myiamge() {
  return (
    <div className="flex desktop:flex-row desktop:flex-nowrap  flex-wrap items-center w-full desktop:w-5/6">
      <div className="border m-1 p-1">
        <Link href={"/Myimage/Myimage.jpg"} target="_blank">
          <Image
            src={"/Myimage/Myimage.jpg"}
            width={500}
            height={500}
            alt="sasa"
            className="w-full height-full desktop:w-60"
          />
        </Link>
      </div>
      <div className="m-2 border p-3 desktop:w-82  h-full rounded-lg">
        <h1 className="py-3 text-2xl font-extrabold duration-150 hover:text-orange-600">
          Personal information
        </h1>
        <div className="flex flex-col w-full  duration-150 hover:text-orange-600">
          <span className="py-2 underline decoration-dotted underline-offset-8">
            ชื่อ : Mr. Htay Aung
          </span>
          <span className="py-2 underline decoration-dotted underline-offset-8">
            ชื่อเล่น : ปีเตอร์ / อายุ : 37
          </span>
          <span className="py-2 underline decoration-dotted underline-offset-8 leading-8">
            สวนสูง : 165ชม. / ศาสนา : พุทธ /  น้ำนัก : 73กก / เชื่อชาติ :
            ไทยใหญ่ / สัญชาติ : พม่า{" "}
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
