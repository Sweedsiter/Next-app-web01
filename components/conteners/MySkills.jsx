import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCsswizardry,
  SiMongodb,
} from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { FaJs, FaFileExcel } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";

export default function MySkills() {
  return (
    <div className="my-5 p-3  w-full ">
      <h1 className="underline underline-offset-[10px] desktop:ml-20 decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-600 mb-3 pl-2 desktop:my-8 desktop:text-4xl">
        Dx Skills
      </h1>
      {/* Cards Design*/}
      <div className=" desktop:flex flex-wrap justify-center">
        {/* Card */}
        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl ">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <FaFileExcel className="text-3xl" />{" "}
              <span className="pl-2">Excel Micro & java Start:2009</span>
            </div>
            <div>70%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-8/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <span className="pl-2">
                .ng Wings Xp2.5 Embroidery Start:2004
              </span>
            </div>
            <div>80%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-8/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <SiAdobeillustrator className="text-3xl" />{" "}
              <span className="pl-2">illustrator Start:2009</span>
            </div>
            <div>98%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-11/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <span className="pl-2">.Emb Wilcom Embroidery Start:2004</span>
            </div>
            <div>98%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-11/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <SiAdobephotoshop className="text-3xl" />{" "}
              <span className="pl-2">photoshop Start:2004</span>
            </div>
            <div>30%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-3/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <ImHtmlFive className="text-3xl" />{" "}
              <span className="pl-2">HTML Start:2020</span>
            </div>
            <div>90%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-11/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <SiCsswizardry className="text-3xl" />{" "}
              <span className="pl-2">CSS Star:2020</span>
            </div>
            <div>90%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-11/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <FaJs className="text-3xl" />{" "}
              <span className="pl-2">JavaScript Start:2020</span>
            </div>
            <div>90%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-11/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <SiMongodb className="text-3xl" />{" "}
              <span className="pl-2">MongoDB Start:2021</span>
            </div>
            <div>78%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-8/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <FaReact className="text-3xl" />{" "}
              <span className="pl-2">React.js Start:2021</span>
            </div>
            <div>78%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-8/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <IoLogoNodejs className="text-3xl" />{" "}
              <span className="pl-2">Nodejs Start:2022</span>
            </div>
            <div>80%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-8/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl ">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <RiNextjsLine className="text-3xl" />{" "}
              <span className="pl-2">Nextjs Start:2023</span>
            </div>
            <div>90%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-10/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
