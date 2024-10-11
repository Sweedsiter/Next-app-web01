import { GiHawkEmblem } from "react-icons/gi";
export default function Adress() {
  return (
    <div className="py-3 flex flex-col flex-wrap w-80 m-3">
      <h1 className="text-2xl font-semibold duration-200 hover:text-orange-600 hover:font-bold hover:pl-2">
        Adress
      </h1>
      <div className="flex flex-row  my-3  duration-200 hover:text-orange-600 hover:pl-2">
        <GiHawkEmblem className="text-2xl mr-2" />
        <span className="text-xl font-medium">Dx-Adress</span>
      </div>
      <span className=" duration-300 hover:text-orange-600 hover:font-bold hover:pl-2">
        Lorem ipsum dซอยเพชรเกษม 106 แขวงหนองค้างพลู เขตหนองแขม กรุงเทพมหานคร
        10160
        <br />
        <br />
        Phet Kasem 106 Nong Khang Phlu, Nong Khaem, Bangkok Thailand 10160
      </span>
    </div>
  );
}
