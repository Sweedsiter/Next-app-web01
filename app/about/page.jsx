import Transition from "@/components/conteners/Transition";

import MySkills from "@/components/conteners/MySkills";
import Resume from "@/components/conteners/Resume";

export default function Home() {
  return (
    <Transition>
      <div className="p-2 flex justify-center items-center flex-col desktop:border rounded-2xl bg-white desktop:drop-shadow-lg">
        <Resume />
        <MySkills />
      </div>
    </Transition>
  );
}
