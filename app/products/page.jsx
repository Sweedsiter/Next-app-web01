import Transition from "@/components/conteners/Transition";

import MyWork02 from "@/components/MyWork/MyWork02";

export default function Home() {
  return (
    <Transition>
      <div className="flex justify-center items-center flex-col relative desktop:border rounded-2xl bg-white desktop:drop-shadow-lg">
      
        <MyWork02 />
      </div>
    </Transition>
  );
}
