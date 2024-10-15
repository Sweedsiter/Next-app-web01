import Adress from "@/components/conteners/Adress";
import Location from "@/components/conteners/Map";
import ContactUS from "@/components/conteners/ContactUS";
import FullLink from "@/components/conteners/FullLink";

export default function Footer() {
  return (
    <div className="flex flex-row flex-wrap desktop:mx-60 mt-2 mb-4 bg-white desktop:drop-shadow-lg rounded-2xl p-5 justify-center">
      <FullLink />
      <ContactUS />
      <Adress />
      <Location />
    </div>
  );
}
