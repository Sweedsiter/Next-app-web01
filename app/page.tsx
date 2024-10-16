import Home1 from "@/components/Home/Home1";
import Home02 from "@/components/Home/Home02";

import Transition from "@/components/conteners/Transition";
export default function Home() {
  return (
    <Transition>
      <Home1 />
      <Home02 />
    </Transition>
  );
}
