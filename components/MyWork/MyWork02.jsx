"use client";

import { useState } from "react";
import Contact from "@/app/contact/page";

export default function MyWork02() {
  const [Status, setStatus] = useState("Embroidery");
  return (
    <div className="p-2 flex flex-col flex-warp imems-center w-full">
      <div className="flex flex-row justify-between  border flex-wrap ">
        <div
          className={
            Status === "Embroidery"
              ? "border py-1 px-3 text-white bg-slate-900 rounded-lg  m-2"
              : "border py-1 px-3 rounded-lg duration-300 hover:text-white hover:bg-slate-900 m-2"
          }
          onClick={() => setStatus("Embroidery")}
        >
          Embroidery Click{" >>>"}
        </div>
        <div
          className={
            Status === "Illustrator"
              ? "border py-1 px-3 text-white bg-slate-900 rounded-lg  m-2"
              : "border py-1 px-3 rounded-lg duration-300 hover:text-white hover:bg-slate-900 m-2"
          }
          onClick={() => setStatus("Illustrator")}
        >
          Illustrator
        </div>
        <div
          className={
            Status === "Website"
              ? "border py-1 px-3 text-white bg-slate-900 rounded-lg  m-2"
              : "border py-1 px-3 rounded-lg duration-300 hover:text-white hover:bg-slate-900 m-2"
          }
          onClick={() => setStatus("Website")}
        >
          Website Design
        </div>
        <div
          className={
            Status === "contact"
              ? "border py-1 px-3 text-white bg-slate-900 rounded-lg  m-2"
              : "border py-1 px-3 rounded-lg duration-300 hover:text-white hover:bg-slate-900 m-2"
          }
          onClick={() => setStatus("contact")}
        >
          Contact
        </div>
      </div>

      {/* cards */}
      {Status === "contact" ? <Contact /> : <div className="p-2">{Status}</div>}
    </div>
  );
}
