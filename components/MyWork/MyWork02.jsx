"use client";

import { useState } from "react";

import Location from "@/components/Contact/Location";
import Contact02 from "@/components/Contact/Contact02";
import Embriodery from "@/components/conteners/Embriodery";
import Illustrator from "@/components/conteners/Illustrator";
import Website from "@/components/conteners/Website";
import Transition from "@/components/conteners/Transition";
import DShirts from "@/components/MyWork/3DShirts";

export default function MyWork02() {
  const [Status, setStatus] = useState("Embroidery");

  function Contact() {
    return (
      <Transition>
        <div className="flex w-full justify-center items-center flex-col bg-white ">
          <Contact02 />
          <Location />
        </div>
      </Transition>
    );
  }

  return (
    <div className="p-2 flex flex-col flex-warp imems-center w-full">
      <h1 className="p-3">ข้อมูลใช้สำหรับตัวอย่างเท่านั้น </h1>
      <div className="flex flex-row justify-between  border flex-wrap ">
        <div
          className={
            Status === "Embroidery"
              ? "border py-1 px-3 text-white bg-slate-900 rounded-lg  m-2"
              : "border py-1 px-3 rounded-lg duration-300 hover:text-white hover:bg-slate-900 m-2"
          }
          onClick={() => setStatus("Embroidery")}
        >
          Embroidery
        </div>
        <div
          className={
            Status === "3DShirts"
              ? "border py-1 px-3 text-white bg-slate-900 rounded-lg  m-2"
              : "border py-1 px-3 rounded-lg duration-300 hover:text-white hover:bg-slate-900 m-2"
          }
          onClick={() => setStatus("3DShirts")}
        >
          3DShirts
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
      {Status === "contact" ? (
        <Contact />
      ) : Status === "3DShirts" ? (
        <div className="p-3">
          <DShirts />
        </div>
      ) : Status === "Embroidery" ? (
        <div className="p-3">
          <Embriodery />
        </div>
      ) : Status === "Illustrator" ? (
        <div className="p-3">
          <Illustrator />
        </div>
      ) : (
        Status === "Website" && (
          <div className="p-3">
            <Website />
          </div>
        )
      )}
    </div>
  );
}
