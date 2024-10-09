import AutoSlick from "./AutoSlick";
export default function Home1() {
  return (
    <div className="px-2 desktop:px-60  flex justify-center items-center flex-col relative">
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
        src="https://videocdn.cdnpk.net/videos/e5e20d0f-c29b-4fde-9cb3-7d0ebc0c2f7f/horizontal/previews/clear/large.mp4?token=exp=1728467661~hmac=8f140b5714b736faf230121098faa176d0f8f3e2c2fba9d79459aa042d08c86b"
        className="w-full"
      />

      <div className="desktop:absolute flex flex-row flex-wrap items-center  justify-center">
        <div className="p-3 text-left flex flex-col desktop:w-2/6">
          <h1 className="py-3 text-xl font-bold cursor-pointer duration-300 hover:text-orange-600 hover:text-2xl cursor-pointer">
            Hi My name is Peter
          </h1>
          <span className="hover:text-base desktop:hover:font-semibold duration-300 hover:text-slate-900 text-slate-800 cursor-pointer ">
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
