"use client";
import Link from "next/link";

import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { usePathname } from "next/navigation";
import ContactUS from "@/components/conteners/ContactUS";

export default function NavLinks() {
  const currentPath = usePathname();
  return (
    <ul>
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
        <span className="pl-1">My Work</span>
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
      <br />
      <br />
      <ContactUS />
    </ul>
  );
}
