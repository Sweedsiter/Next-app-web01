import Image from "next/image";
import Link from "next/link";

export default function Embroidery() {
  return (
    <div className="w-full h-auto flex flex-row flex-wrap">
      <Link href="/Embroidery/DLP02Print.jpg" target="_blank">
        <Image
          src="/Embroidery/DLP02Print.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-60"
        />
      </Link>
    </div>
  );
}
