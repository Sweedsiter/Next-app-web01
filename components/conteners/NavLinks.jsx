import Link from "next/link";

import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

export default function NavLinks() {
  return (
    <ul>
      <Link
        href={"/"}
        className="duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center py-2  pl-5"
      >
        <IoHomeOutline /> <span className="pl-1">Home</span>
      </Link>
      <Link
        href={"/products"}
        className="duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center py-2  pl-5"
      >
        <AiOutlineProduct />
        <span className="pl-1">Product</span>
      </Link>
      <Link
        href={"/about"}
        className="duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center py-2 pl-5"
      >
        <MdOutlineRoundaboutRight />
        <span className="pl-1">About</span>
      </Link>
      <Link
        href={"/contact"}
        className="duration-200 hover:text-orange-600 hover:font-bold flex flex-row items-center pl-5"
      >
        <IoIosContact />
        <span className="pl-1">Contact</span>
      </Link>
    </ul>
  );
}
