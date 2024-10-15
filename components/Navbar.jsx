"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { usePathname } from "next/navigation";
import { GiHawkEmblem } from "react-icons/gi";

import NavLinks from "@/components/conteners/NavLinks";

export default function Navbar() {
  const currentPath = usePathname();
  const [Status, setStatus] = useState(null);

  const NavCom = () => {
    return (
      <ul className="flex flex-col p-2  " onClick={() => setStatus(null)}>
        <NavLinks />
        <span
          onClick={() => setStatus(null)}
          className="flex flex-row justify-center items-center bg-slate-300 text-slate-900 p-1 mt-1"
        >
          <FaWindowClose />
          <span className="pl-2">Closs</span>
        </span>
      </ul>
    );
  };

  return (
    <div>
      <nav className="desktop:border bg-white desktop:drop-shadow-lg rounded-2xl flex flex-row justify-between sticky top-0 p-3  items-center text-slate-900 delay-600 desktop:mx-60 desktop:mt-2  duration-300 ">
        <div>
          <Link
            href={"/"}
            className="duration-200 font-bold text-xl hover:text-orange-600 hover:text-2xl flex flex-row items-center"
          >
            <GiHawkEmblem className="text-2xl " />
            <span className="pl-2">Dx-app</span>
          </Link>
        </div>
        <div className="lebtop">
          <ul className="flex  flex-row">
            <Link
              href={"/"}
              className={
                currentPath === "/"
                  ? " text-orange-600 font-bold flex flex-row items-center py-2  pl-5  "
                  : "duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center py-2  pl-5"
              }
            >
              <IoHomeOutline /> <span className="pl-1">Home</span>
            </Link>
            <Link
              href={"/products"}
              className={
                currentPath === "/products"
                  ? " text-orange-600 font-bold flex flex-row items-center py-2  pl-5  "
                  : "duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center py-2  pl-5"
              }
            >
              <AiOutlineProduct />
              <span className="pl-1">Product</span>
            </Link>
            <Link
              href={"/about"}
              className={
                currentPath === "/about"
                  ? " text-orange-600 font-bold flex flex-row items-center py-2  pl-5  "
                  : "duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center py-2  pl-5"
              }
            >
              <MdOutlineRoundaboutRight />
              <span className="pl-1">About</span>
            </Link>
            <Link
              href={"/contact"}
              className={
                currentPath === "/contact"
                  ? " text-orange-600 font-bold flex flex-row items-center py-2  pl-5  "
                  : "duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center py-2  pl-5"
              }
            >
              <IoIosContact />
              <span className="pl-1">Contact</span>
            </Link>
          </ul>
        </div>
        <div className="mobile ">
          {!Status ? (
            <span onClick={() => setStatus(true)}>
              <FaBars className="duration-200 text-2xl hover:text-orange-600 hover:text-3xl" />
            </span>
          ) : (
            <FaWindowClose
              className="text-2xl"
              onClick={() => setStatus(null)}
            />
          )}
        </div>
      </nav>
      {/* mobile Nav */}
      {Status && <NavCom />}
    </div>
  );
}
