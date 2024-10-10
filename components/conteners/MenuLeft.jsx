import NavLinks from "@/components/conteners/NavLinks"

export default function MenuLeft() {
  return (
    <ul>
      <h1 className="text-2xl font-semibold underline underline-offset-8 ml-6 py-3 duration-300 hover:text-orange-600 hover:pl-2">
        Menu
      </h1>
      <NavLinks/>
    </ul>
  );
}
