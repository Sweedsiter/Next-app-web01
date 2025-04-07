import Transition from "@/components/conteners/Transition";

export default function Home() {
  return (
    <Transition>
      <div className="p-2 flex justify-center items-center flex-col desktop:border rounded-2xl bg-white desktop:drop-shadow-lg"></div>
    </Transition>
  );
}
