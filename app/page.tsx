import Home1 from "@/components/Home/Home1";
import Home02 from "@/components/Home/Home02";

import Transition from "@/components/conteners/Transition";
export default function Home() {
  return (
    <Transition>
      <div className="p-2 flex justify-center items-center flex-col relative desktop:border rounded-2xl bg-white desktop:drop-shadow-lg">
        <Home1 />
        <Home02 />
      </div>
    </Transition>
  );
}
