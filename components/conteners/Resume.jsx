export default function Resume() {
  return (
    <div className="my-5 flex flex-wrap  desktop:mt-8 w-fit ">
      <h1 className="desktop:ml-20 underline underline-offset-[10px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-600 mb-3 pl-2 desktop:my-8 desktop:text-4xl">
        Dx Resume
      </h1>
      {/* Cards */}
      <div className="flex flex-wrap desktop:justify-center w-full">
        {/* Card */}
        <div className="border p-3 rounded-2xl desktop:w-5/12 m-1 w-full">
          <div className="px-3 py-2  text-white text-xs bg-emerald-500 rounded-xl w-fit h-fit duration-150 hover:bg-orange-600">
            2002 - 2010
          </div>
          <h1 className="pt-5 text-2xl font-extrabold duration-150 hover:text-orange-600">
            MP Military Police
          </h1>
          <h2 className="pb-3 duration-150 hover:text-orange-600 text-emerald-600">
            Bang-bon Bangkok Thailand
          </h2>
          <span className="duration-150 hover:text-orange-600">
            เป็นพนักงานเย็บผ้าและเขียนาลายปัก Wings xp <br />
            เกี่ยวกับเสื้อโปโล ส่งออกนอกและภายใน <br /> เขตบางบอน กรุงเทพมหานคร
          </span>
        </div>

        <div className="border p-3 rounded-2xl desktop:w-5/12 m-1 w-full">
          <div className="px-3 py-2 text-white text-xs bg-emerald-500 rounded-xl w-fit h-fit duration-150 hover:bg-orange-600  ">
            2010 - 2019
          </div>
          <h1 className="pt-5 text-2xl font-extrabold duration-150 hover:text-orange-600">
            Polobb.com.ltd
          </h1>
          <h2 className="pb-3 duration-150 hover:text-orange-600 text-emerald-600">
            Nonthaburi Thailand
          </h2>
          <span className="duration-150 hover:text-orange-600">
            เป็นพนักงาน{" "}
            <span className="text-red-700">Sale - Graphic-design</span> <br />
            ขายออนไลน์พร้อมออกแบบ
            <br />
            Bang Bua Thong District, Nonthaburi
          </span>
        </div>

        <div className="border p-3 rounded-2xl desktop:w-5/12 m-1 w-full">
          <div className="px-3 py-2  text-white text-xs bg-emerald-500 rounded-xl w-fit h-fit duration-150 hover:bg-orange-600  ">
            2019 - 2020
          </div>
          <h1 className="pt-5 text-2xl font-extrabold duration-150 hover:text-orange-600">
            DD Garment.ltd
          </h1>
          <h2 className="pb-3 duration-150 hover:text-orange-600 text-emerald-600">
            Thawi Watthana Bangkok Thailand
          </h2>
          <span className="duration-150 hover:text-orange-600">
            เป็นพนักงานออกแบบ{" "}
            <span className="text-red-700">Graphic-design</span> <br />
            ออกแบบเสื้อผ้าส่งออก <br />
            Sala Thammasop, Thawi Watthana, Bangkok
          </span>
        </div>

        <div className="border p-3 rounded-2xl desktop:w-5/12 m-1 w-full">
          <div className="px-3 py-2 text-white text-xs bg-emerald-500 rounded-xl w-fit h-fit duration-150 hover:bg-orange-600  ">
            2020 - 2022
          </div>
          <h1 className="pt-5 text-2xl font-extrabold duration-150 hover:text-orange-600">
            DNC Garment.ltd
          </h1>
          <h2 className="pb-3 duration-150 hover:text-orange-600 text-emerald-600">
            Thawi Watthana Bangkok Thailand
          </h2>
          <span className="duration-150 hover:text-orange-600">
            เป็นพนักงานออกแบบ{" "}
            <span className="text-red-700">Graphic-design</span> <br />
            ออกแบบเสื้อผ้า นำเข้า Big-C
            <br />
            Sala Thammasop, Thawi Watthana, Bangkok
          </span>
        </div>

        <div className="border p-3 rounded-2xl desktop:w-5/12 m-1 w-full">
          <div className="px-3 py-2 text-white text-xs bg-emerald-500 rounded-xl w-fit h-fit duration-150 hover:bg-orange-600  ">
            2022 - 2023
          </div>
          <h1 className="pt-5 text-2xl font-extrabold duration-150 hover:text-orange-600">
            MicroEmbroidery.co.ltd
          </h1>
          <h2 className="pb-3 duration-150 hover:text-orange-600 text-emerald-600">
            Bang-bon Bangkok Thailand
          </h2>
          <span className="duration-150 hover:text-orange-600">
            เป็นพนักงานออกแบบ
            <span className="text-red-700"> Graphic-design</span> <br />
            เย็บปักถักร้อย ส่งออกแลภายใน
            <br />
            Khlong Bang Bon, Bang Bon, Bangkok
          </span>
        </div>

        <div className="border p-3 rounded-2xl desktop:w-5/12 m-1 w-full">
          <div className="px-3 py-2 text-white text-xs bg-emerald-500 rounded-xl w-fit h-fit duration-150 hover:bg-orange-600  ">
            2023 - ปัจจุบัน
          </div>
          <h1 className="pt-5 text-2xl font-extrabold duration-150 hover:text-orange-600">
            SomsriTshirt Garment.ltd
          </h1>
          <h2 className="pb-3 duration-150 hover:text-orange-600 text-emerald-600">
            Nong-Khaem Bangkok Thailand
          </h2>
          <span className="duration-150 hover:text-orange-600">
            เป็นพนักงานออกแบบ
            <span className="text-red-700"> Graphic-design</span> <br />
            เกี่ยวกับเสื้อผ้าภายใน
            <br />
            Nong Khang Phlu, Nong Khaem, Bangkok
          </span>
        </div>
      </div>
    </div>
  );
}
