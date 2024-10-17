import { AiOutlineAntDesign } from "react-icons/ai";
import { GiWillowTree } from "react-icons/gi";
import { TiWorld } from "react-icons/ti";

export default function Home02() {
  return (
    <div className=" flex justify-center items-center flex-col relative">
      <div className="px-3 py-10">
        <h1 className="desktop:mx-2 underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-600 mb-5">
          What I do?
        </h1>
        <div className="leading-8  my-2 flex flex-wrap ">
          <div className="desktop:w-80 desktop:m-2 my-2 duration-150 hover:text-orange-600 flex flex-row items-center border p-2 rounded-2xl hover:bg-slate-100">
            <div className="p-2 border text-2xl w-fit h-fit rounded-lg ">
              <AiOutlineAntDesign />
            </div>
            <span className="ml-2 p-2">
              รับออกแบบ โลโก้ แบบเสื้อผ้า และ ป้ายต่างๆ ออกแบบโดยโปรแกรม Ai
              illustrator
            </span>
          </div>

          <div className="desktop:w-80 desktop:m-2 my-2 duration-150 hover:text-orange-600 flex flex-row items-center border p-2 rounded-2xl hover:bg-slate-100">
            <div className="p-2 border text-2xl w-fit h-fit rounded-lg ">
              <GiWillowTree />
            </div>
            <span className="ml-2 p-2">
              รับเขียนลายปัก ทุกประเภศ ส่งมอบตรงต่อเวลา ได้รับไฟล์นามสกุล .emb
              .dst .pes .exp
            </span>
          </div>

          <div className="desktop:w-80 desktop:m-2 my-2 duration-150 hover:text-orange-600 flex flex-row items-center border p-2 rounded-2xl hover:bg-slate-100">
            <div className="p-2 border text-2xl w-fit h-fit rounded-lg ">
              <TiWorld />
            </div>
            <span className="ml-2 p-2">
              รับเขียนเว็บไซต์ ทุกแนว มีระบบหน้าบ้านและ หลังบ้าน ดูแลตลอดเวลา จด
              Domain ตรงจากต่างประเทศ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
