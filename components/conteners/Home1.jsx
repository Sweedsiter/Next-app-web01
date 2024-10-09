import AutoSlick from "./AutoSlick";
export default function Home1() {
  return (
    <div className="px-2 desktop:px-60  flex justify-center items-center flex-col relative">
      <video
        loop
        autoPlay
        muted
        src={require("../../public/backgVideo.mp4")}
        className=""
      />
      <div className="desktop:absolute flex flex-row flex-wrap items-center  justify-center">
        <div className="p-3 text-left flex flex-col desktop:w-2/6">
          <h1 className="py-3 text-xl font-bold cursor-pointer duration-300 hover:text-orange-600 hover:text-2xl cursor-pointer">
            Company Name
          </h1>
          <span className="hover:text-base desktop:hover:font-semibold duration-300 hover:text-slate-900 text-slate-800 cursor-pointer ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            enim nisi perspiciatis quo expedita, iste inventore voluptate unde
            assumenda vitae veniam. Modi quae quas adipisci? Neque dolor magnam
            illo minima.
          </span>
          <button
            type="download"
            className="border desktop:w-fit backdrop-blur-sm bg-white/30 p-2 mt-2 rounded-lg hover:bg-orange-500 duration-300 hover:font-semibold  hover:border-none hover:text-slate-100 hover:text-bold"
          >
            Download
          </button>
        </div>
        {/* R */}
        <div className="desktop:w-80 desktop:ml-10 p-2 w-80">
          <AutoSlick />
        </div>
      </div>
    </div>
  );
}
