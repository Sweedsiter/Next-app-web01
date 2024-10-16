import AutoSlick from "../conteners/AutoSlick";

export default function Home1() {
  return (
    <div className="p-2 flex justify-center items-center flex-col relative desktop:border rounded-2xl bg-white desktop:drop-shadow-lg">
      {/* <video
        loop
        autoPlay
        muted
        src={require("../../public/backgVideo.mp4")}
        className=""
      /> */}
      <video
        loop
        autoPlay
        muted
        src="https://videos.pexels.com/video-files/3578883/3578883-uhd_2560_1440_30fps.mp4"
        className="w-full rounded-2xl"
      />

      <div className="desktop:absolute flex flex-row flex-wrap items-center  justify-center">
        <div className="p-3 text-left flex flex-col desktop:w-2/6">
          <h1 className="py-3 text-xl font-bold cursor-pointer duration-300 desktop:hover:text-white hover:text-2xl cursor-pointer">
            Hi My name is Peter
          </h1>
          <span className="hover:text-base desktop:hover:font-semibold duration-300 desktop:hover:text-white text-slate-800 cursor-pointer ">
            สวัสดีครับ .... ผมชื่อ (ปีเตอร์) เป็นคนไทยใหญ่ ถึอสัญชาติพม่า
            บ้านเกิดผมอยู่ที่ Hsipaw ประเทศ Myanmar หมู่บ้าน (village San Pake){" "}
            <br />
            เรียนที่ No.1 Basic Education High School Hsipaw
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
