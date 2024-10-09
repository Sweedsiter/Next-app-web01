"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";

export default function Navbar() {
  const [Status, setStatus] = useState(null);

  const NavCom = () => {
    return (
      <ul className="flex flex-col p-2 " onClick={() => setStatus(null)}>
        <Link
          href={"/"}
          className="py-2 hover:text-red-900 hover:font-semibold hover:bg-slate-300 hover:pl-2 duration-300 "
        >
          Home
        </Link>
        <Link
          className="py-2 hover:text-red-900 hover:font-semibold hover:bg-slate-300 hover:pl-2 duration-300 "
          href={"/products"}
        >
          Product
        </Link>
        <Link
          className="py-2 hover:text-red-900 hover:font-semibold hover:bg-slate-300 hover:pl-2 duration-300 "
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="py-2 hover:text-red-900 hover:font-semibold hover:bg-slate-300 hover:pl-2 duration-300 "
          href={"/contact"}
        >
          Contact
        </Link>
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
      <nav className="w-full flex flex-row justify-between sticky top-0 p-3  items-center text-slate-900 delay-600 desktop:px-60 duration-300 ">
        <div>
          <Link
            href={"/"}
            className="duration-200 font-bold text-xl hover:text-orange-600 hover:text-2xl"
          >
            Logo
          </Link>
        </div>
        <div className="lebtop">
          <ul>
            <Link
              href={"/"}
              className="duration-200 hover:underline underline-offset-8 decoration-2 hover:text-orange-600 hover:font-bold "
            >
              Home
            </Link>
            <Link
              href={"/products"}
              className="pl-6 duration-200 hover:underline underline-offset-8 decoration-2 hover:text-orange-600 hover:font-bold "
            >
              Product
            </Link>
            <Link
              href={"/about"}
              className="pl-6 duration-200 hover:underline underline-offset-8 decoration-2 hover:text-orange-600 hover:font-bold "
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="pl-6 duration-200 hover:underline underline-offset-8 decoration-2 hover:text-orange-600 hover:font-bold "
            >
              Contact
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
      {Status && <NavCom />}
    </div>
  );
}
