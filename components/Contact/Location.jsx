export default function Location() {
  return (
    <div className="w-full p-3">
      <h1 className="underline underline-offset-[6px] decoration-sky-500 text-2xl text-bold font-black ease-in duration-150 hover:text-orange-600  desktop:ml-3">
        Location
      </h1>
      <div className="w-full desktop:w-6/6 mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4814.880179845987!2d100.354814!3d13.710578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29609369b345f%3A0x4db0cc940ac0fc60!2zMTExIOC4i-C4reC4oiDguYDguJ7guIrguKPguYDguIHguKnguKEgMTA2IOC5geC4guC4p-C4h-C4q-C4meC4reC4h-C4hOC5ieC4suC4h-C4nuC4peC4uSDguYDguILguJXguKvguJnguK3guIfguYHguILguKEg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwMTYw!5e1!3m2!1sth!2sth!4v1729233494228!5m2!1sth!2sth"
          className="w-full h-80 desktop:h-96"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
