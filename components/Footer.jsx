import Adress from "@/components/conteners/Adress";

export default function Footer() {
  return (
    <div className="flex flex-row flex-wrap desktop:mx-60 my-2 bg-white desktop:drop-shadow-lg rounded-2xl p-5 justify-center">
      <Adress />
      <Adress />
      <Adress />
      <Adress />
    </div>
  );
}
