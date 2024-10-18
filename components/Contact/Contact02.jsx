import Adress from "@/components/conteners/Adress";

import ContactUS from "@/components/conteners/ContactUS";
import FullLink from "@/components/conteners/FullLink";

export default function Contact02() {
  return (
    <div className="w-full p-3">
      <h1 className="underline ml-3 underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-600 mt-3">
        Dx Contact Us
      </h1>
      <div className="w-full mt-6 flex flex-wrap ">
        <FullLink />
        <ContactUS />
        <Adress />
      </div>
    </div>
  );
}
