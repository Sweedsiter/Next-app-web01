import Transition from "@/components/conteners/Transition";

import Location from "@/components/Contact/Location";
import Contact02 from "@/components/Contact/Contact02";

export default function Home() {
  return (
    <Transition>
      <div className="p-2 flex w-full justify-center items-center flex-col relative desktop:border rounded-2xl bg-white desktop:drop-shadow-lg">
        <Contact02 />
        <Location />
      </div>
    </Transition>
  );
}
