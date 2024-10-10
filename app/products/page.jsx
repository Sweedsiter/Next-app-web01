export default function Home() {
  return (
    <div className="p-2 flex justify-center items-center flex-col relative desktop:border rounded-2xl bg-white desktop:drop-shadow-lg">
      <video
        loop
        autoPlay
        muted
        src="https://videos.pexels.com/video-files/9733975/9733975-uhd_2732_1440_30fps.mp4"
        className="w-full rounded-2xl"
      />
    </div>
  );
}
