export default function Compoone() {
  return (
    <div className="bg-mycolor flex flex-col md:flex-row px-5 gap-5">
      <div className=" text-white  flex flex-col justify-center gap-8">
        <h1 className="font-myfont text-5xl font-bold">
          Modern Interior Design Studio
        </h1>
        <p className="text-scolor">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div className="flex gap-5 pb-7">
          <a
            className="text-black py-1 px-7 text-2xl bg-amber-500 hover:bg-amber-600 rounded-4xl"
            href="/shop"
          >
            Shop
          </a>
          <a
            className="py-1 px-7 text-2xl border-1 border-scolor hover:border-white rounded-4xl"
            href="/shop"
          >
            Explor
          </a>
        </div>
      </div>
      <div>
        <img className="w-[1000px]" src="couch.png" alt="#" />
      </div>
    </div>
  );
}
