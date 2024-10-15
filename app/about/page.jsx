import Transition from "@/components/conteners/Transition";

export default function Home() {
  return (
    <Transition>
      <div
        Transition
        className="p-2 flex justify-center items-center flex-col relative desktop:border rounded-2xl bg-white desktop:drop-shadow-lg"
      >
        <video
          loop
          autoPlay
          muted
          src="https://videos.pexels.com/video-files/1739010/1739010-hd_1920_1080_30fps.mp4"
          className="w-full rounded-2xl"
        />
      </div>
    </Transition>
  );
}
