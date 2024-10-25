export default function Language() {
  return (
    <div className="p-5 border w-full desktop:w-5/6 rounded-2xl">
      <h1 className="p-5  text-2xl font-extrabold duration-150 hover:text-orange-600">
        Language.....
      </h1>
      <div className=" desktop:flex flex-wrap justify-between">
        {/* Card */}
        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl ">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <span className="pl-2">ภาษาไทย </span>
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
              <span className="pl-2">ภาษาไทยใหญ่ </span>
            </div>
            <div>90%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-10/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl ">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <span className="pl-2">ภาษาพม่า</span>
            </div>
            <div>90%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-10/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>

        <div className="desktop:w-5/12 m-1 border my-1 p-2 rounded-xl ">
          <div className="flex flex-row justify-between duration-300 hover:text-orange-600 py-2">
            <div className="inline-block flex flex-row items-center">
              <span className="pl-2">ภาษาอังกฤษ</span>
            </div>
            <div>40%</div>
          </div>
          <div className="w-full h-3 bg-slate-400 relative">
            <div className="absolute left-0 w-4/12 bg-emerald-500 h-3 duration-300 hover:bg-orange-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
