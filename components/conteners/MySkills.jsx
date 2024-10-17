export default function MySkills() {
  return (
    <div className="my-5 p-3  w-full ">
      <h1 className="underline underline-offset-[10px] desktop:ml-20 decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-600 mb-3 pl-2 desktop:my-8 desktop:text-4xl">
        Dx Skills
      </h1>
      {/* Cards */}
      <div className=" desktop:flex flex-wrap justify-center">
        {/* Card */}
        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div>Detail</div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-11/12 bg-emerald-500 h-3"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl">
          <div>Detail</div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-11/12 bg-emerald-500 h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
