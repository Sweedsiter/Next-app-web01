import Link from "next/link";

export default function Embroidery() {
  return (
    <div className="w-full h-auto flex flex-row flex-wrap">
      <Link
        href={
          "https://drive.google.com/file/d/101H8ASwZSsqBx_nAgpPUgC9ug7SQvDtS/view?usp=sharing"
        }
        target="_blank"
      >
        <img
          className="w-full"
          src="https://www.google.co.th/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw2FXmd3Fj1cHFwA7IA11LE3&ust=1729590925277000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDd6raan4kDFQAAAAAdAAAAABAE"
          width={300}
          height={300}
        />
      </Link>
      <Link href={""}>img</Link>
      <Link href={""}>img</Link>
    </div>
  );
}
